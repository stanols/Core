using System.IO;
using Microsoft.AspNetCore;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Builder;
using Core.WebApi;

namespace Core.Server
{
	public class Server
	{
		private readonly IConfiguration _config;

		public Server(IConfiguration config)
		{
			_config = config;
		}

		public void Run(IWebHost webHost)
		{
			webHost.Run();
		}

		public IWebHostBuilder CreateWebHostBuilder(string[] arguments)
		{
			const string webRootKey = "webRoot";
			const string urlKey = "url";
			const string urlHttpsKey = "urlHttps";

			var builder = WebHost.CreateDefaultBuilder(arguments);
			//var webRoot = Path.Combine(Directory.GetCurrentDirectory(), _config[webRootKey]);
			var urls = new[] { _config[urlKey], _config[urlHttpsKey] };
			var webHostBuilder = builder
				.UseConfiguration(_config)
				.UseUrls(urls)
				.UseWebRoot(_config[webRootKey])
				.UseKestrel()
				.UseIISIntegration()
				.ConfigureLogging((hostingContext, logging) =>
				{
					logging.AddConsole();
					logging.AddDebug();
				})
				.UseStartup<Startup>()
				.UseDefaultServiceProvider((context, options) =>
				{
					options.ValidateScopes = context.HostingEnvironment.IsDevelopment();
				});

			return webHostBuilder;
		}
	}
}
