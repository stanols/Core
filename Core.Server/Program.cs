using System;
using Microsoft.Extensions.Configuration;

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
				_server.RunWebApplication(arguments);
			}
			catch (Exception exception)
			{
				Console.WriteLine($"Message: {exception.Message}; Inner Exception: {exception.InnerException}");
				Console.ReadLine();
			}
		}
	}
}
