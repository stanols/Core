using System.IO;
using Core.WebApi;
using Microsoft.AspNetCore;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Logging;


namespace Core.Server
{
	public class Server
	{
		private readonly IConfiguration _config;
		private readonly IWebHost _webHost;

		public Server(IConfiguration config, string[] arguments)
		{
			_config = config;
			var builder = CreateBuilder(arguments);
			_webHost = Build(builder);
		}

		public void Run()
		{
			_webHost.Run();
		}

		private IWebHostBuilder CreateBuilder(string[] arguments)
		{
			const string webRootKey = "webRoot";
			const string urlKey = "url";

			var builder = WebHost.CreateDefaultBuilder(arguments);
			var webRoot = Path.Combine(Directory.GetCurrentDirectory(), _config[webRootKey]);
			var urls = new[] { _config[urlKey] };
			var webHostBuilder = builder.UseConfiguration(_config)
				.UseUrls(urls)
				.UseWebRoot(webRoot)
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

		private static IWebHost Build(IWebHostBuilder webHostBuilder)
		{
			var webHost = webHostBuilder.Build();
			return webHost;
		}
	}
}
