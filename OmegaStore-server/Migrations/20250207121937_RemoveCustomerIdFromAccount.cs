using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OmegaStore_server.Migrations
{
    /// <inheritdoc />
    public partial class RemoveCustomerIdFromAccount : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CustomerId",
                table: "Account");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "CustomerId",
                table: "Account",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0L);
        }
    }
}
