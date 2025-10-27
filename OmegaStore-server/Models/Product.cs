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

    [DataType(DataType.DateTime)]
    [Display(Name = "Created Date")]
    public required DateTime CreatedDate { get; set; }

    public int Sale { get; set; } = 0;

    public required long CategoryId { get; set; }

    public Category? Category { get; set; }

    public required long ManufacturerId { get; set; }

    public Manufacturer? Manufacturer { get; set; }

    public ICollection<PurchaseItem>? PurchaseItems { get; set; }

    public static void CreateSeedData(OmegaStoreContext context)
    {
        context.Product.AddRange(
            new Product
            {
                Name = "CPU AMD Ryzen 5 5600",
                Price = 199,
                Image = "img_cpu_amd_ryzen_5_5600.png",
                Description = "CPU AMD Ryzen 5 5600 is a desktop processor with 6 cores, launched in April 2022, at an MSRP of $199. It is part of the Ryzen 5 lineup, using the Zen 3 (Vermeer) architecture with Socket AM4. Thanks to AMD Simultaneous Multithreading (SMT) the core-count is effectively doubled, to 12 threads.",
                Stock = 100,
                WarrantyPeriod = 3,
                CreatedDate = DateTime.Parse("2025-02-15T12:00:00"),
                CategoryId = 1,
                ManufacturerId = 2
            },
            new Product
            {
                Name = "CPU AMD Ryzen 99950X",
                Price = 649,
                Image = "img_cpu_amd_ryzen_9_9950x.png",
                Description = "CPU AMD Ryzen 9 9950X is a desktop processor with 16 cores, launched in August 2024, at an MSRP of $649. It is part of the Ryzen 9 lineup, using the Zen 5 (Granite Ridge) architecture with Socket AM5. Thanks to AMD Simultaneous Multithreading (SMT) the core-count is effectively doubled, to 32 threads.",
                Stock = 50,
                WarrantyPeriod = 6,
                CreatedDate = DateTime.Parse("2025-02-15T12:00:00"),
                CategoryId = 1,
                ManufacturerId = 2
            },
            new Product
            {
                Name = "CPU Intel Core I7 12700",
                Price = 349,
                Image = "img_cpu_intel_core_i7_12700.png",
                Description = "CPU Intel Core i7-12700 is a desktop processor with 12 cores, launched in January 2022, at an MSRP of $349. It is part of the Core i7 lineup, using the Alder Lake-S architecture with Socket 1700. Intel Hyper-Threading technology is available and effectly doubles the core-count of the P-Cores, to a total of 20 threads.",
                Stock = 50,
                WarrantyPeriod = 3,
                CreatedDate = DateTime.Parse("2025-02-15T12:00:00"),
                CategoryId = 1,
                ManufacturerId = 1
            },
            new Product
            {
                Name = "RAM Corsair Dominator Platinum RGB DDR5 5200MHz 32GB",
                Price = 131.99f,
                Image = "img_ram_corsair_dominator_platinum_rgb_ddr5_5200mhz_32gb.png",
                Description = "Push the limits of performance with RAM Corsair Dominator Platinum RGB DDR5 5200MHz 32GB optimized for Intel® taking advantage of higher frequencies and greater capacities of DDR5, precisely controlled via CORSAIR iCUE software.",
                Stock = 100,
                WarrantyPeriod = 3,
                CreatedDate = DateTime.Parse("2025-02-15T12:00:00"),
                CategoryId = 3,
                ManufacturerId = 14,
            },
            new Product
            {
                Name = "RAM Corsair Vengeance RGB RS DDR4 3200MHz 32GB",
                Price = 79.99f,
                Image = "img_ram_corsair_vengeance_rgb_rs_ddr4_3200mhz_32gb.png",
                Description = "RAM Corsair Vengeance RGB RS DDR4 3200MHz 32GB punches up your PC's aesthetics with dynamic, individually addressable RGB lighting, while delivering outstanding performance optimized for Intel® and AMD motherboards.",
                Stock = 200,
                WarrantyPeriod = 3,
                CreatedDate = DateTime.Parse("2025-02-15T12:00:00"),
                CategoryId = 3,
                ManufacturerId = 14,
            },
            new Product
            {
                Name = "RAM Corsair Vengeance RGB RS DDR4 3600MHz 8GB",
                Price = 27.99f,
                Image = "img_ram_corsair_vengeance_rgb_rs_ddr4_3600mhz_8gb.png",
                Description = "RAM Corsair Vengeance RGB RS DDR4 3600MHz 8GB punches up your PC's aesthetics with dynamic, individually addressable RGB lighting, while delivering outstanding performance optimized for Intel® and AMD motherboards.",
                Stock = 150,
                WarrantyPeriod = 3,
                CreatedDate = DateTime.Parse("2025-02-15T12:00:00"),
                CategoryId = 3,
                ManufacturerId = 14
            }
        );

        context.SaveChanges();
    }

    public static async Task UpdateExistedRecords(OmegaStoreContext context)
    {
        var productList = await context.Product.Include(p => p.PurchaseItems).ToListAsync();

        foreach (var product in productList)
        {
            if (product.PurchaseItems != null)
            {
                foreach (var purchaseItem in product.PurchaseItems)
                {
                    product.Sale += purchaseItem.Quantity;
                }

                context.Update(product);
            }
        }

        context.SaveChanges();
    }
}