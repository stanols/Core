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
            services.AddMvc();
            services.AddServices();
            services.AddRepositories();
            services.AddDbContext(_config);
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment evn)
        {
            app.UseStaticFiles();
            app.UseMvc();
            app.Build();
        }
    }
}
