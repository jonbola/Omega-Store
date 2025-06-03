using System.ComponentModel.DataAnnotations;
using OmegaStore_server.Data;

namespace OmegaStore_server.Models;

public class Category
{
    public long Id { get; set; }

    public required string Name { get; set; }

    public string? Description { get; set; }

    [Display(Name = "Product List")]
    public ICollection<Product>? Products { get; set; } = new List<Product>();

    public static void CreateSeedData(OmegaStoreContext context)
    {
        context.Category.AddRange(
            new Category
            {
                Name = "CPU",
                Description = "CPU (Central Processing Unit) is the primary component of a computer that acts as its control center."
            },
            new Category
            {
                Name = "GPU",
                Description = "GPU (Graphics Processing Unit) is a specialized processor originally designed to accelerate graphics rendering."
            },
            new Category
            {
                Name = "RAM",
                Description = "RAM (Random Access Memory) is a common computing acronym that stands for random-access memory. It's where the data is stored that your computer processor needs to run your applications and open your files."
            },
            new Category
            {
                Name = "HDD",
                Description = "HDD (Hard Disk Drive) is a type of data storage device that is used in laptops and desktop computers."
            },
            new Category
            {
                Name = "SSD",
                Description = "SSD (Solid Stand Drive) is a type of computer storage device that uses integrated circuit assemblies to store data persistently."
            },
            new Category
            {
                Name = "PSU",
                Description = "PSU (Power Supply Unit) is a hardware device that converts AC electricity into DC electricity and then distributes it to the rest of the computer."
            }
        );

        context.SaveChanges();
    }
}