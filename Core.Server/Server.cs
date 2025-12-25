using System.Security.Claims;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.Certificate;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Core.BLL;
using Core.BLL.Interfaces;
using Core.DAL;
using Core.DAL.Extensions;
using Core.WebApi;
using Core.WebApi.Controllers;
using Core.WebApi.Hubs;

namespace Core.Server
{
	public class Server
	{
		private readonly IConfiguration _config;

		public Server(IConfiguration config)
		{
			_config = config;
		}

		public void RunWebApplication(string[] arguments)
		{
			const string httpUrlKey = "httpUrl";
			const string httpsUrlKey = "httpsUrl";
			const string webRootKey = "webRoot";
			const string certificateFileNameKey = "certificateFileName";
			const string certificatePasswordKey = "certificatePassword";

			var webRoot = _config[webRootKey];
			var builder = WebApplication.CreateBuilder(new WebApplicationOptions
			{
				WebRootPath = webRoot
			});
			var urls = new[] {
				_config[httpUrlKey],
				_config[httpsUrlKey]
			};
			
			var certificateFileName = _config[certificateFileNameKey];
			var certificatePassword = _config[certificatePasswordKey];

			builder.Configuration.AddConfiguration(_config);
			builder.Configuration["Urls"] = string.Join(';', urls);

			var webHostBuilder = builder.WebHost
				.UseKestrel(options =>
				{
					options.ListenAnyIP(8080); //Listen IPAddress.Loopback
					options.ListenAnyIP(8081, listenOptions =>
					{
						var certificate = new X509Certificate2(
							certificateFileName,
							certificatePassword
						);
						listenOptions.UseHttps(certificate);
					});
				})
				.UseDefaultServiceProvider((context, options) =>
				{
					options.ValidateScopes = context.HostingEnvironment.IsDevelopment();
				});

			const string secretKey = "secret";

			builder.Services.AddSingleton(_config);
			builder.Services.AddDbContext(_config);
			builder.Services.AddRepositories();
			builder.Services.AddServices();
			builder.Services.AddCors();
			builder.Services.AddControllers()
				.AddApplicationPart(typeof(BaseController).Assembly);

			var secret = _config[secretKey];
			var symmetricSecurityKey = Encoding.ASCII.GetBytes(secret);

			builder.Services
				.AddAuthentication(x =>
				{
					x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
					x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
					x.DefaultScheme = CertificateAuthenticationDefaults.AuthenticationScheme;
				})
				.AddCertificate(x =>
				{
					x.Events = new CertificateAuthenticationEvents
					{
						OnCertificateValidated = context =>
						{
							var claims = new[]
							{
								new Claim(
									ClaimTypes.NameIdentifier,
									context.ClientCertificate.Subject,
									ClaimValueTypes.String,
									context.Options.ClaimsIssuer
								),
								new Claim(
									ClaimTypes.Name,
									context.ClientCertificate.Subject,
									ClaimValueTypes.String,
									context.Options.ClaimsIssuer
								)
							};

							var claimsIdentity = new ClaimsIdentity(claims, context.Scheme.Name);

							context.Principal = new ClaimsPrincipal(claimsIdentity);
							context.Success();

							return Task.CompletedTask;
						}
					};
					x.AllowedCertificateTypes = CertificateTypes.SelfSigned;
					x.ValidateCertificateUse = true;
				})
				.AddJwtBearer(x =>
				{
					x.Events = new JwtBearerEvents
					{
						OnTokenValidated = context =>
						{
							var userService = context.HttpContext.RequestServices.GetRequiredService<IUserService>();
							var id = int.Parse(context.Principal.Identity.Name);
							var user = userService.Get(id);

							if (user == null)
							{
								context.Fail("Unauthorized");
							}

							return Task.CompletedTask;
						}
					};
					x.RequireHttpsMetadata = true;
					x.SaveToken = true;
					x.TokenValidationParameters = new TokenValidationParameters
					{
						ValidateIssuerSigningKey = true,
						IssuerSigningKey = new SymmetricSecurityKey(symmetricSecurityKey),
						ValidateIssuer = false,
						ValidateAudience = false,
						ValidateLifetime = true
					};
				});

			builder.Services.AddSignalR();
			builder.Services.AddEndpointsApiExplorer();
			builder.Services.AddSwaggerGen();
			builder.Services.AddSwaggerGenNewtonsoftSupport();

			var app = builder.Build();

			//app.UsePathBase("/client/react");
			//app.UsePathBase("/client/angular");
			//app.UsePathBase("/client/vue");
			//app.UsePathBase("/");

			app.UseDefaultFiles();
			app.UseStaticFiles();
			app.UseCors(x => x
				.AllowAnyOrigin()
				.AllowAnyMethod()
				.AllowAnyHeader());

			app.UseCertificateForwarding();
			app.UseHsts();

			app.UseRouting();
			app.UseMiddleware<ExceptionHandlingMiddleware>();
			app.UseExceptionHandler("/error");
			app.UseAuthentication();
			app.UseAuthorization();

			app.MapControllers();
			app.MapHub<ChatHub>($"/hubs/{nameof(ChatHub)}");
			app.MapFallbackToFile("/angular/{*path}", "angular/index.html");
			app.MapFallbackToFile("/react/{*path}", "react/index.html");
			app.MapFallbackToFile("/vue/{*path}", "vue/index.html");

			app.UseSwagger();
			app.UseSwaggerUI();

			app.UseMigrations();

			app.Run();
		}
	}
}
