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
		public DbSet<Experience> Experiences { get; set; }
		public DbSet<Adventure> Adventures { get; set; }

		public DbSet<AdventureUser> AdventureUsers { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.HasDefaultSchema("public");
			modelBuilder.ForNpgsqlUseIdentityAlwaysColumns();
			modelBuilder.ForNpgsqlUseSequenceHiLo();

			modelBuilder.Entity<User>()
				.HasIndex(b => b.Name)
				.IsUnique();

			base.OnModelCreating(modelBuilder);
		}

		public override int SaveChanges()
		{
			ChangeTracker.DetectChanges();

			return base.SaveChanges();
		}
	}
}
