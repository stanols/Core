using System;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Hosting;

namespace Core.Server
{
	public static class Program
	{
		private const string AppSettingsFileName = "appsettings.json";

		private static readonly IConfigurationRoot _config = new ConfigurationBuilder()
			.AddJsonFile(AppSettingsFileName)
			.Build();
		private static readonly Server _server = new Server(_config);

		public static void Main(string[] arguments)
		{
			try
			{
				var webHostBuilder = CreateWebHostBuilder(arguments);
				var webHost = webHostBuilder.Build();
				_server.Run(webHost);
			}
			catch (Exception exception)
			{
				Console.WriteLine($"Message: {exception.Message}; Inner Exception: {exception.InnerException}");
				Console.ReadLine();
			}
		}

		public static IWebHostBuilder CreateWebHostBuilder(string[] arguments)
		{
			return _server.CreateWebHostBuilder(arguments);
		}
	}
}
