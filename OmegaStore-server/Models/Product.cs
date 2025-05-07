using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OmegaStore_server.Data;

namespace OmegaStore_server.Models;

public class Product
{
    public long Id { get; set; }

    public required string Name { get; set; }

    public required float Price { get; set; }

    public string? Image { get; set; }

    public string? Description { get; set; }

    public int? Stock { get; set; }

    [Display(Name = "Warranty Period")]
    public double? WarrantyPeriod { get; set; }

    public required long CategoryId { get; set; }

    public Category? Category { get; set; }

    public required long ManufacturerId { get; set; }

    public Manufacturer? Manufacturer { get; set; }

    public static void CreateSeedData(OmegaStoreContext context)
    {
        context.Product.AddRange(
            new Product
            {
                Name = "CPU AMD Ryzen 5 5600",
                Price = 199,
                Image = "img_cpu_amd_ryzen_5_5600.png",
                Description = "",
                Stock = 100,
                WarrantyPeriod = 3,
                CategoryId = 1,
                ManufacturerId = 2
            },

            new Product
            {
                Name = "CPU AMD Ryzen 9 9950X",
                Price = 649,
                Image = "img_cpu_amd_ryzen_9_9950x.png",
                Description = "",
                Stock = 50,
                WarrantyPeriod = 5,
                CategoryId = 1,
                ManufacturerId = 2
            },

            new Product
            {
                Name = "CPU Intel Core I7 12700",
                Price = 309.99f,
                Image = "img_cpu_intel_core_i7_12700.png",
                Description = "",
                Stock = 50,
                WarrantyPeriod = 3,
                CategoryId = 1,
                ManufacturerId = 1
            }
        );

        context.SaveChanges();
    }
}