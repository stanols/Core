using Core.DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace Core.DAL
{
	public class CoreDbContext : DbContext
	{
		private const int defaultStartValue = 100;
		private const string defaultSchema = "public";

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
			modelBuilder.HasDefaultSchema(defaultSchema);
			
			modelBuilder.UseIdentityColumns();
			modelBuilder.UseIdentityByDefaultColumns();

			modelBuilder.Entity<User>().Property(b => b.Id).HasIdentityOptions(startValue: defaultStartValue);
			modelBuilder.Entity<Location>().Property(b => b.Id).HasIdentityOptions(startValue: defaultStartValue);
			modelBuilder.Entity<Experience>().Property(b => b.Id).HasIdentityOptions(startValue: defaultStartValue);
			modelBuilder.Entity<Adventure>().Property(b => b.Id).HasIdentityOptions(startValue: defaultStartValue);
			modelBuilder.Entity<AdventureUser>().Property(b => b.Id).HasIdentityOptions(startValue: defaultStartValue);

			modelBuilder.Entity<User>()
                .HasIndex(b => b.Name)
                .IsUnique();

			modelBuilder.Entity<Location>()
				.HasIndex(x => x.Name)
				.IsUnique();

			modelBuilder.Entity<Experience>()
				.HasIndex(x => x.Name)
				.IsUnique();

			modelBuilder.Entity<Adventure>()
				.HasIndex(x => x.Name)
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
