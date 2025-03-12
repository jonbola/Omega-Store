using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OmegaStore_server.Migrations
{
    /// <inheritdoc />
    public partial class AddAsyncVersionBetweenAccountAndAccountInfo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AccountInfo_Account_AccountId",
                table: "AccountInfo");

            migrationBuilder.DropIndex(
                name: "IX_AccountInfo_AccountId",
                table: "AccountInfo");

            migrationBuilder.AddColumn<byte[]>(
                name: "AsyncVersion",
                table: "AccountInfo",
                type: "BLOB",
                rowVersion: true,
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "AsyncVersion",
                table: "Account",
                type: "BLOB",
                rowVersion: true,
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AsyncVersion",
                table: "AccountInfo");

            migrationBuilder.DropColumn(
                name: "AsyncVersion",
                table: "Account");

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
    }
}
