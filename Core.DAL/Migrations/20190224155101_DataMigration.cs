using System;
using System.IO;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Core.DAL.Migrations
{
	public partial class DataMigration : Migration
	{
		protected override void Up(MigrationBuilder migrationBuilder)
		{
			var file = Path.Combine(AppContext.BaseDirectory, @"Migrations/Scripts/20190210120504_InitialMigration_Up.sql");
			migrationBuilder.Sql(File.ReadAllText(file));

			migrationBuilder.EnsureSchema(
				name: "public");

			//UpdateTablesData(migrationBuilder);
		}

		protected override void Down(MigrationBuilder migrationBuilder)
		{
			var file = Path.Combine(AppContext.BaseDirectory, @"Migrations/Scripts/20190210120504_InitialMigration_Down.sql");
			migrationBuilder.Sql(File.ReadAllText(file));
		}

		private void UpdateTablesData(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.InsertData(
				"Locations",
				new[]
				{
					"Id", "Name", "Latitude", "Longitude"
				},
				new object[,]
				{
					{1, "Tears Island", 53.909681, 27.554582},
					{2, "National Library", 53.931938, 27.645489},
					{3, "Lenin Square", 53.895357, 27.547705},
					{4, "Big Ben", 51.500843, -0.124647},
					{5, "National Gallery", 51.509388, -0.128731}
				});

			migrationBuilder.InsertData(
				"Users",
				new[]
				{
					"Id", "Name", "FirstName", "LastName", "Email"
				},
				new object[,]
				{
					{1, "nmatch", "Natalia", "Motovaya", "n.match@yandex.ru"},
					{2, "katatinak", "Katya", "Kaliukhovich", "k_kaliukhovich@gmail.com"}
				});

			migrationBuilder.InsertData(
				"Adventures",
				new[]
				{
					"Id", "Name", "Description", "StartsOn", "EndsOn", "CreatedById"
				},
				new object[,]
				{
					{1, "Trip to Minsk", "Would like to visit Belarus", DateTime.UtcNow.AddDays(1), DateTime.UtcNow.AddDays(50), 1},
					{2, "Trip to London", "Nice to have BigBen toy", DateTime.UtcNow.AddDays(60), DateTime.UtcNow.AddDays(120), 2}
				});

			migrationBuilder.InsertData(
				"Experiences",
				new[]
				{
					"Id", "Name", "Description", "LocationId", "AdventureId", "StartsOn", "EndsOn"
				},
				new object[,]
				{
					{1, "Nemiga", "Driving catamaran", 1, 1, DateTime.UtcNow, DateTime.UtcNow.AddDays(30)},
					{2, "Capital Shopping Mall", "Crazy shopping", 3, 1, DateTime.UtcNow.AddDays(-30), DateTime.UtcNow},
					{3, "National Library", "Reading books", 2, 1, DateTime.UtcNow.AddYears(1), DateTime.UtcNow.AddYears(2)},
					{4, "Big Ben Building", "Learn national culture", 4, 2, DateTime.UtcNow.AddYears(-1), DateTime.UtcNow.AddYears(-2)},
					{5, "National Gallery", "Gallery", 5, 2, DateTime.UtcNow.AddMonths(3), DateTime.UtcNow.AddMonths(6)}
				});

			migrationBuilder.InsertData(
				"AdventureUsers",
				new[]
				{
					"Id", "AdventureId", "UserId"
				},
				new object[,]
				{
					{ 1, 1, 1 },
					{ 2, 1, 2 },
					{ 3, 2, 1 }
				});
		}
	}
}
