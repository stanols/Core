using System;
using Core.DAL.Interfaces;
using Core.DAL.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Npgsql.EntityFrameworkCore.PostgreSQL;

namespace Core.DAL
{
    public static class DalModule
    {
        public static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<IAdventureRepository, AdventureRepository>();

            return services;
        }

        public static IServiceCollection AddDbContext(this IServiceCollection services, IConfiguration config)
        {
            const string connectionStringKey = "connectionString";

            var connectionString = config[connectionStringKey];
            services.AddDbContext<CoreDbContext>(opts => opts.UseNpgsql(connectionString));

            return services;
        }
    }
}
