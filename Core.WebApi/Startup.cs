using System.Text;
using System.Threading.Tasks;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Authentication.Certificate;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Core.DAL;
using Core.DAL.Extensions;
using Core.BLL;
using Core.BLL.Interfaces;
using Core.WebApi.Hubs;

namespace Core.WebApi
{
	public class Startup
	{
		private readonly IConfiguration _config;

		public Startup(IConfiguration config)
		{
			_config = config;
		}

		public void ConfigureServices(IServiceCollection services)
		{
			const string secretKey = "secret";

			services.AddSingleton(_config);
			services.AddDbContext(_config);
			services.AddRepositories();
			services.AddServices();
			services.AddCors();
			services.AddMvc();

			var secret = _config[secretKey];
			var symmetricSecurityKey = Encoding.ASCII.GetBytes(secret);

			services
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
							var claims = new []
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

			services.AddSignalR();

			services.AddEndpointsApiExplorer();
			services.AddSwaggerGen();
			services.AddSwaggerGenNewtonsoftSupport();
		}

		public void Configure(IApplicationBuilder app)
		{
			app.UsePathBase("/client/react");
			app.UsePathBase("/client/angular");
			app.UsePathBase("/client/vue");

			app.UseDefaultFiles();
			app.UseStaticFiles();
			app.UseCors(x => x
				.AllowAnyOrigin()
				.AllowAnyMethod()
				.AllowAnyHeader());

			app.UseCertificateForwarding();
			app.UseHttpsRedirection();
			app.UseHsts();

			app.UseExceptionHandler("/error");
			app.UseRouting();

			app.UseAuthentication();
			app.UseAuthorization();

			app.UseMiddleware<ExceptionHandlingMiddleware>();

			app.UseEndpoints(routes =>
			{
				routes.MapControllers();
				routes.MapHub<ChatHub>($"/hubs/{nameof(ChatHub)}");
			});

			app.Build();

			app.UseSwagger();
			app.UseSwaggerUI();

			app.UseMigrations();
		}
	}
}
