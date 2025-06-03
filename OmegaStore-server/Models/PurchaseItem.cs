using System.ComponentModel.DataAnnotations;
using OmegaStore_server.Data;

namespace OmegaStore_server.Models;

public class PurchaseItem
{
    public long Id { get; set; }

    public required int Quantity { get; set; }

    public required long PurchaseId { get; set; }

    public Purchase? Purchase { get; set; }

    [Display(Name = "Product Name")]
    public required long ProductId { get; set; }

    public Product? Product { get; set; }

    public static void CreateSeedData(OmegaStoreContext context)
    {
        context.AddRange(
            new PurchaseItem
            {
                ProductId = 1,
                Quantity = 10,
                PurchaseId = 1
            },

            new PurchaseItem
            {
                ProductId = 3,
                Quantity = 5,
                PurchaseId = 1
            },

            new PurchaseItem
            {
                ProductId = 2,
                Quantity = 20,
                PurchaseId = 2
            },

            new PurchaseItem
            {
                ProductId = 2,
                Quantity = 4,
                PurchaseId = 3
            },

            new PurchaseItem
            {
                ProductId = 1,
                Quantity = 100,
                PurchaseId = 4
            },

            new PurchaseItem
            {
                ProductId = 1,
                Quantity = 15,
                PurchaseId = 5
            },

            new PurchaseItem
            {
                ProductId = 2,
                Quantity = 19,
                PurchaseId = 5
            },

            new PurchaseItem
            {
                ProductId = 3,
                Quantity = 7,
                PurchaseId = 5
            }
        );

        context.SaveChanges();
    }
}