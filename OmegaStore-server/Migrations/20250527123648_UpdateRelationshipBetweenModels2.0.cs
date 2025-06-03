using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OmegaStore_server.Migrations
{
    /// <inheritdoc />
    public partial class UpdateRelationshipBetweenModels20 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_AccountInfo_AccountId",
                table: "AccountInfo",
                column: "AccountId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_AccountInfo_Account_AccountId",
                table: "AccountInfo",
                column: "AccountId",
                principalTable: "Account",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AccountInfo_Account_AccountId",
                table: "AccountInfo");

            migrationBuilder.DropIndex(
                name: "IX_AccountInfo_AccountId",
                table: "AccountInfo");
        }
    }
}
