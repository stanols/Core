using System.Net;
using System.Security.Cryptography.X509Certificates;
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
			const string httpUrlKey = "httpUrl";
			const string httpsUrlKey = "httpsUrl";
			const string webRootKey = "webRoot";
			const string certificateFileNameKey = "certificateFileName";
			const string certificatePasswordKey = "certificatePassword";

			var builder = WebHost.CreateDefaultBuilder(arguments);
			var urls = new[] {
				_config[httpUrlKey],
				_config[httpsUrlKey]
			};
			var webRoot = _config[webRootKey];
			var certificateFileName = _config[certificateFileNameKey];
			var certificatePassword = _config[certificatePasswordKey];

			var webHostBuilder = builder
				.UseConfiguration(_config)
				.UseUrls(urls)
				.UseWebRoot(webRoot)
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
