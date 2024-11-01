using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Core.DAL.Extensions
{
    public static class ApplicationBuilderExtensions
    {
        public static void UseMigrations(this IApplicationBuilder builder)
        {
            using (var scope = builder.ApplicationServices.CreateScope())
            {
                var context = scope.ServiceProvider.GetRequiredService<CoreDbContext>();
                context.Database.Migrate();
            }
        }
    }
}
