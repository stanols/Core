using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Core.BLL;
using Core.BLL.Interfaces;
using Core.DAL;
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
			const string secret = "secret";

			services.AddSingleton(_config);
			services.AddDbContext(_config);
			services.AddRepositories();
			services.AddServices();
			services.AddCors();
			services.AddMvc();

			var secretKey = _config[secret];
			var key = Encoding.ASCII.GetBytes(secretKey);
			services
				.AddAuthentication(x =>
				{
					x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
					x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
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
					x.RequireHttpsMetadata = false;
					x.SaveToken = true;
					x.TokenValidationParameters = new TokenValidationParameters
					{
						ValidateIssuerSigningKey = true,
						IssuerSigningKey = new SymmetricSecurityKey(key),
						ValidateIssuer = false,
						ValidateAudience = false,
						ValidateLifetime = true
					};
				});

			services.AddSignalR();
		}

		public void Configure(IApplicationBuilder app)
		{
			//app.UsePathBase("/client/react");
			app.UsePathBase("/client/angular");

			app.UseDefaultFiles();
			app.UseStaticFiles();
			app.UseCors(x => x
				.AllowAnyOrigin()
				.AllowAnyMethod()
				.AllowAnyHeader());

			app.UseRouting();
			app.UseAuthentication();
			app.UseAuthorization();

			app.UseEndpoints(routes =>
			{
				routes.MapControllers();
				routes.MapHub<ChatHub>($"/hubs/{nameof(ChatHub)}");
			});

			app.Build();
		}
	}
}
