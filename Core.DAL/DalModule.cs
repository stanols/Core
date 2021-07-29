using Core.DAL.Interfaces;
using Core.DAL.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Core.DAL
{
	public static class DalModule
	{
		public static IServiceCollection AddRepositories(this IServiceCollection services)
		{
			services.AddTransient<IUserRepository, UserRepository>();
			services.AddTransient<IAdventureRepository, AdventureRepository>();
			services.AddTransient<IExperienceRepository, ExperienceRepository>();

			return services;
		}

		public static IServiceCollection AddDbContext(this IServiceCollection services, IConfiguration config)
		{
			const string connectionStringKey = "connectionString";

			var connectionString = config[connectionStringKey];
			services.AddDbContext<CoreDbContext>(options =>
				options.UseNpgsql(connectionString));

			return services;
		}
	}
}
