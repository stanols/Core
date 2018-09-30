using System.IO;
using Core.WebApi;
using Microsoft.AspNetCore;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Hosting;

namespace Core.Server
{
    public static class Server
    {
        public static IWebHost Build(IConfiguration config, string[] arguments)
        {
            const string webRootKey = "webRoot";
            const string urlKey = "url";

            var builder = WebHost.CreateDefaultBuilder(arguments);
            var webRoot = Path.Combine(Directory.GetCurrentDirectory(), config[webRootKey]);
            var urls = new[] { config[urlKey] };

            var webHostBuilder = builder.UseConfiguration(config)
                .UseUrls(urls)
                .UseWebRoot(webRoot)
                .UseKestrel()
                .UseIISIntegration()
                .UseStartup<Startup>()
                .UseDefaultServiceProvider((context, options) =>
                {
                    options.ValidateScopes = context.HostingEnvironment.IsDevelopment();
                });

            return webHostBuilder.Build();
        }

        public static void Run(IWebHost webHost)
        {
            webHost.Run();
        }
    }
}
