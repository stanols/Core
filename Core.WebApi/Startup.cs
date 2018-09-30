using System;
using System.Text;
using System.Threading.Tasks;
using Core.BLL;
using Core.BLL.Interfaces;
using Core.DAL;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using AutoMapper;

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
            services.AddAutoMapper();
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
						ValidateAudience = false
					};
				});
        }

		public void Configure(IApplicationBuilder app, IHostingEnvironment evn)
		{
			app.UseStaticFiles();
			app.UseCors(x => x
				.AllowAnyOrigin()
				.AllowAnyMethod()
				.AllowAnyHeader()
				.AllowCredentials());
		    app.UseAuthentication();
		    app.UseMvc();
            app.Build();
		}
	}
}
