using System;
using System.IO;
using Microsoft.Extensions.Configuration;

namespace Core.Server
{
    class Program
    {
        private const string AppSettingsFileName = "appsettings.json";

        static void Main(string[] arguments)
        {
            try
            {
                var config = new ConfigurationBuilder()
                    .SetBasePath(Directory.GetCurrentDirectory())
                    .AddJsonFile(AppSettingsFileName)
                    .Build();

                var server = new Core.WebApi.Server(config);
                server.Run(arguments);

                Console.WriteLine("Running... Press any key to exit");
                Console.ReadLine();
            }
            catch (Exception exception)
            {
                Console.WriteLine("Message: {0}; Inner Exception: {1}",
                    exception.Message, exception.InnerException);
                Console.ReadLine();
            }
        }
    }
}
