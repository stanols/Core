using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Core.DAL.Migrations
{
	public partial class InitialMigration : Migration
	{
		protected override void Up(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.CreateSequence(
				name: "EntityFrameworkHiLoSequence",
				incrementBy: 10);

			migrationBuilder.CreateTable(
				name: "Locations",
				columns: table => new
				{
					Id = table.Column<int>(type: "integer", nullable: false),
					Name = table.Column<string>(nullable: true),
					Latitude = table.Column<double>(nullable: false),
					Longitude = table.Column<double>(nullable: false)
				},
				constraints: table => { table.PrimaryKey("PK_Locations", x => x.Id); });

			migrationBuilder.CreateTable(
				name: "Users",
				columns: table => new
				{
					Id = table.Column<int>(type: "integer", nullable: false),
					Name = table.Column<string>(maxLength: 450, nullable: true),
					FirstName = table.Column<string>(nullable: true),
					LastName = table.Column<string>(nullable: true),
					Email = table.Column<string>(nullable: true),
					PasswordSalt = table.Column<byte[]>(nullable: true),
					PasswordHash = table.Column<byte[]>(nullable: true)
				},
				constraints: table => { table.PrimaryKey("PK_Users", x => x.Id); });

			migrationBuilder.CreateTable(
				name: "Adventures",
				columns: table => new
				{
					Id = table.Column<int>(type: "integer", nullable: false),
					Name = table.Column<string>(nullable: true),
					Description = table.Column<string>(nullable: true),
					StartsOn = table.Column<DateTime>(nullable: false),
					EndsOn = table.Column<DateTime>(nullable: false),
					CreatedById = table.Column<int>(nullable: false)
				},
				constraints: table =>
				{
					table.PrimaryKey("PK_Adventures", x => x.Id);
					table.ForeignKey(
						name: "FK_Adventures_Users_CreatedById",
						column: x => x.CreatedById,
						principalTable: "Users",
						principalColumn: "Id",
						onDelete: ReferentialAction.Cascade);
				});

			migrationBuilder.CreateTable(
				name: "AdventureUsers",
				columns: table => new
				{
					Id = table.Column<int>(type: "integer", nullable: false),
					AdventureId = table.Column<int>(nullable: false),
					UserId = table.Column<int>(nullable: false)
				},
				constraints: table =>
				{
					table.PrimaryKey("PK_AdventureUsers", x => x.Id);
					table.ForeignKey(
						name: "FK_AdventureUsers_Adventures_AdventureId",
						column: x => x.AdventureId,
						principalTable: "Adventures",
						principalColumn: "Id",
						onDelete: ReferentialAction.Cascade);
					table.ForeignKey(
						name: "FK_AdventureUsers_Users_UserId",
						column: x => x.UserId,
						principalTable: "Users",
						principalColumn: "Id",
						onDelete: ReferentialAction.Cascade);
				});

			migrationBuilder.CreateTable(
				name: "Experiences",
				columns: table => new
				{
					Id = table.Column<int>(type: "integer", nullable: false),
					Name = table.Column<string>(nullable: true),
					Description = table.Column<string>(nullable: true),
					StartsOn = table.Column<DateTime>(nullable: false),
					EndsOn = table.Column<DateTime>(nullable: false),
					LocationId = table.Column<int>(nullable: false),
					AdventureId = table.Column<int>(nullable: false)
				},
				constraints: table =>
				{
					table.PrimaryKey("PK_Experiences", x => x.Id);
					table.ForeignKey(
						name: "FK_Experiences_Adventures_AdventureId",
						column: x => x.AdventureId,
						principalTable: "Adventures",
						principalColumn: "Id",
						onDelete: ReferentialAction.Cascade);
					table.ForeignKey(
						name: "FK_Experiences_Locations_LocationId",
						column: x => x.LocationId,
						principalTable: "Locations",
						principalColumn: "Id",
						onDelete: ReferentialAction.Cascade);
				});

			migrationBuilder.CreateIndex(
				name: "IX_Adventures_CreatedById",
				table: "Adventures",
				column: "CreatedById");

			migrationBuilder.CreateIndex(
				name: "IX_AdventureUsers_AdventureId",
				table: "AdventureUsers",
				column: "AdventureId");

			migrationBuilder.CreateIndex(
				name: "IX_AdventureUsers_UserId",
				table: "AdventureUsers",
				column: "UserId");

			migrationBuilder.CreateIndex(
				name: "IX_Experiences_AdventureId",
				table: "Experiences",
				column: "AdventureId");

			migrationBuilder.CreateIndex(
				name: "IX_Experiences_LocationId",
				table: "Experiences",
				column: "LocationId");

			migrationBuilder.CreateIndex(
				name: "IX_Users_Name",
				table: "Users",
				column: "Name",
				unique: true);
		}

		protected override void Down(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.DropTable(
				name: "AdventureUsers");

			migrationBuilder.DropTable(
				name: "Experiences");

			migrationBuilder.DropTable(
				name: "Adventures");

			migrationBuilder.DropTable(
				name: "Locations");

			migrationBuilder.DropTable(
				name: "Users");

			migrationBuilder.DropSequence(
				name: "EntityFrameworkHiLoSequence");
		}
	}
}
