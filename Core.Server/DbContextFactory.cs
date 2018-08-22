using System;
using System.IO;
using Core.DAL;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Core.Server
{
    public class DbContextFactory : IDesignTimeDbContextFactory<CoreDbContext>
    {
        private const string AppSettingsFileName = "appsettings.json";
        private const string ConnectionStringKey = "connectionString";
        private const string MigrationsAssembly = "Core.DAL";

        public CoreDbContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile(AppSettingsFileName)
                .Build();

            var builder = new DbContextOptionsBuilder<CoreDbContext>();
            var connectionString = config[ConnectionStringKey];
            builder.UseNpgsql(connectionString, b => b.MigrationsAssembly(MigrationsAssembly));

            return new CoreDbContext(builder.Options);
        }
    }
}
