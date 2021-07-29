using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Core.DAL
{
	public class DbContextFactory : IDesignTimeDbContextFactory<CoreDbContext>
	{
		private const string AppSettingsFileName = "appsettings.json";
		private const string ConnectionStringKey = "connectionString";
		private const string MigrationsAssembly = "Core.DAL";

		public CoreDbContext CreateDbContext(string[] args)
		{
			var config = new ConfigurationBuilder()
				.AddJsonFile(AppSettingsFileName)
				.Build();

			var builder = new DbContextOptionsBuilder<CoreDbContext>();
			var connectionString = config[ConnectionStringKey];

			builder.UseNpgsql(connectionString, b => b.MigrationsAssembly(MigrationsAssembly));
			builder.EnableSensitiveDataLogging();

			return new CoreDbContext(builder.Options);
		}
	}
}
