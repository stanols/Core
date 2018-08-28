using System;
using Core.DAL.Entities;
using Core.DAL.Interfaces;
using Core.DAL.Repositories;
using Microsoft.AspNetCore.Identity;
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

            return services;
        }

        public static IServiceCollection AddDbContext(this IServiceCollection services, IConfiguration config)
        {
            const string connectionStringKey = "connectionString";

            var connectionString = config[connectionStringKey];
            services.AddDbContext<CoreDbContext>(opts => opts.UseNpgsql(connectionString));

            services.AddIdentity<User, Role>()
                .AddEntityFrameworkStores<CoreDbContext>()
                .AddDefaultTokenProviders();

            
            //services.AddAuthentication();

            return services;
        }
    }
}
