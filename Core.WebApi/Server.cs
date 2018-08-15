using System.IO;
using Microsoft.AspNetCore;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Hosting;

namespace Core.WebApi
{
    public class Server
    {
        private readonly IConfiguration _config;
        
        public Server(IConfiguration config)
        {
            _config = config;
        }

        public void Run(string[] arguments)
        {
            var builder = WebHost.CreateDefaultBuilder(arguments);
            var webRoot = Path.Combine(Directory.GetCurrentDirectory(), _config["webRoot"]);
            var urls = new[] { _config["url"] };

            var webHostBuilder = builder.UseConfiguration(_config)
                .UseUrls(urls)
                .UseWebRoot(webRoot)
                .UseKestrel()
                .UseStartup<Startup>();
            var webHost = webHostBuilder.Build();

            webHost.Run();
        }
    }
}
