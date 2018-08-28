using System;
using Core.BLL;
using Core.DAL;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;

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
            services.AddDbContext(_config);
            services.AddRepositories();
            services.AddServices();
            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment evn)
        {
            app.UseStaticFiles();
            app.UseAuthentication();
            app.UseMvc();
            app.Build();
        }
    }
}
