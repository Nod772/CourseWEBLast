using Microsoft.EntityFrameworkCore.Migrations;

namespace BaseJWTApplication819.Api_Angular.Migrations
{
    public partial class _091120201 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Options_Discussions_DiscussionID",
                table: "Options");

            migrationBuilder.DropTable(
                name: "tblProducts");

            migrationBuilder.AddForeignKey(
                name: "FK_Options_Discussions_DiscussionID",
                table: "Options",
                column: "DiscussionID",
                principalTable: "Discussions",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Options_Discussions_DiscussionID",
                table: "Options");

            migrationBuilder.CreateTable(
                name: "tblProducts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageURL = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<float>(type: "real", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblProducts", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Options_Discussions_DiscussionID",
                table: "Options",
                column: "DiscussionID",
                principalTable: "Discussions",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
