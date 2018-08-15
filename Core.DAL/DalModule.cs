using System;
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

            return services;
        }

        public static IServiceCollection AddDbContext(this IServiceCollection services, IConfiguration config)
        {
            const string connectionStringName = "connectionString";

            var connectionString = config[connectionStringName];
            services.AddDbContext<CoreDbContext>(
                optionsBuilder => optionsBuilder.UseNpgsql(connectionString), 
                ServiceLifetime.Singleton, 
                ServiceLifetime.Singleton);

            return services;
        }
    }
}
