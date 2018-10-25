using Core.DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace Core.DAL
{
	public class CoreDbContext : DbContext
	{
		public CoreDbContext(DbContextOptions<CoreDbContext> options)
			: base(options)
		{
		}

		public DbSet<User> Users { get; set; }
		public DbSet<Location> Locations { get; set; }
		public DbSet<Event> Events { get; set; }
		public DbSet<Adventure> Adventures { get; set; }

		protected override void OnModelCreating(ModelBuilder builder)
		{
			builder.Entity<User>()
				.HasIndex(b => b.Name)
				.IsUnique();

			base.OnModelCreating(builder);
		}

		public override int SaveChanges()
		{
			ChangeTracker.DetectChanges();

			return base.SaveChanges();
		}
	}
}
