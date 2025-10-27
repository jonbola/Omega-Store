using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using NuGet.Packaging;
using OmegaStore_server.Data;

namespace OmegaStore_server.Models;

public class Purchase
{
    public long Id { get; set; }

    [Display(Name = "Total Purchase")]
    public required float TotalPurchase { get; set; }

    [DataType(DataType.DateTime)]
    [Display(Name = "Purchase Date")]
    public required DateTime PurchaseDate { get; set; }

    public required bool Status { get; set; }

    public required long AccountId { get; set; }

    public Account? Account { get; set; }

    [Display(Name = "Item List")]
    public required ICollection<PurchaseItem> Items { get; set; }

    public static void CreateSeedData(OmegaStoreContext context)
    {
        context.AddRange(
            new Purchase
            {
                Items = new List<PurchaseItem> { },
                TotalPurchase = 0,
                PurchaseDate = DateTime.Parse("2025-02-15T12:00:00"),
                Status = true,
                AccountId = 2
            },
            new Purchase
            {
                Items = new List<PurchaseItem> { },
                TotalPurchase = 0,
                PurchaseDate = DateTime.Parse("2025-02-15T12:00:00"),
                Status = true,
                AccountId = 2
            },
            new Purchase
            {
                Items = new List<PurchaseItem> { },
                TotalPurchase = 0,
                PurchaseDate = DateTime.Parse("2025-02-15T12:00:00"),
                Status = true,
                AccountId = 2
            },
            new Purchase
            {
                Items = new List<PurchaseItem> { },
                TotalPurchase = 0,
                PurchaseDate = DateTime.Parse("2025-02-15T12:00:00"),
                Status = true,
                AccountId = 3
            },
            new Purchase
            {
                Items = new List<PurchaseItem> { },
                TotalPurchase = 0,
                PurchaseDate = DateTime.Parse("2025-02-15T12:00:00"),
                Status = true,
                AccountId = 3
            }
        );

        context.SaveChanges();
    }

    public static async Task UpdateExistedRecords(OmegaStoreContext context)
    {
        var purchaseList = await context.Purchase.Include(pc => pc.Items).ThenInclude(pi => pi.Product).ToListAsync();

        foreach (var purchase in purchaseList)
        {
            float totalPurchase = 0;

            foreach (var item in purchase.Items)
            {
                if (item.Product != null)
                {
                    totalPurchase += item.Quantity * item.Product.Price;
                }
            }

            purchase.TotalPurchase = totalPurchase;

            context.Update(purchase);
        }

        context.SaveChanges();
    }
}