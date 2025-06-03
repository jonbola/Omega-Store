using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OmegaStore_server.Migrations
{
    /// <inheritdoc />
    public partial class UpdateModelsPurchaseAndPurchaseItemAndRelationshipBetweenThem : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Price",
                table: "PurchaseItem");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "Price",
                table: "PurchaseItem",
                type: "TEXT",
                nullable: false,
                defaultValue: 0m);
        }
    }
}
