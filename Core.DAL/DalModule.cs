using Core.DAL.Interfaces;
using Core.DAL.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.IO;
using System.Reflection;

namespace Core.DAL
{
	public static class DalModule
	{
		private const string ConnectionStringKey = "connectionString";
		private const string CommandTimeoutSecondsKey = "commandTimeoutSeconds";

		public static IServiceCollection AddRepositories(this IServiceCollection services)
		{
			services.AddTransient<IUserRepository, UserRepository>();
			services.AddTransient<IAdventureRepository, AdventureRepository>();
			services.AddTransient<IExperienceRepository, ExperienceRepository>();
			services.AddTransient<ILocationRepository, LocationRepository>();

			return services;
		}

		public static IServiceCollection AddDbContext(this IServiceCollection services, IConfiguration config)
		{
			var environmentConnectionString = Environment.GetEnvironmentVariable("CONNECTION_STRING");
			var connectionString = environmentConnectionString ?? config.GetValue<string>(ConnectionStringKey);
			var timeout = config.GetValue<int>(CommandTimeoutSecondsKey);
			var assembly = Assembly.GetExecutingAssembly();
			var assemblyName = assembly.GetName().Name;

			services.AddDbContext<CoreDbContext>(
				optionsBuilder =>
					optionsBuilder
						.UseNpgsql(
							connectionString,
							npgSqlOptionsBuilder => npgSqlOptionsBuilder.CommandTimeout(timeout)
						.MigrationsAssembly(assemblyName)));

			return services;
		}
	}
}
