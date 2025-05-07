using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OmegaStore_server.Data;

namespace OmegaStore_server.Models;

public class Manufacturer
{
    public long Id { get; set; }

    public required string Name { get; set; }

    public string? Address { get; set; }

    [Display(Name = "Product List")]
    public ICollection<Product>? Products { get; set; } = new List<Product>();

    public static void CreateSeedData(OmegaStoreContext context)
    {
        context.Manufacturer.AddRange(
            new Manufacturer
            {
                Name = "Intel Corp",
                Address = "Santa Clara, California, United States"
            },
            new Manufacturer
            {
                Name = "AMD Inc",
                Address = "Santa Clara, California, United States"
            },
            new Manufacturer
            {
                Name = "NVIDIA Corp",
                Address = "Santa Clara, California, United States"
            },
            new Manufacturer
            {
                Name = "MSI Co., Ltd.",
                Address = "Zhonghe District, New Taipei City, Taiwan"
            },
            new Manufacturer
            {
                Name = "Gigabyte Technology Co., Ltd.",
                Address = "Xindian District, New Taipei City, Taiwan"
            },
            new Manufacturer
            {
                Name = "AsusTek Computer Inc",
                Address = "Beitou District, New Taipei City, Taiwan"
            },
            new Manufacturer
            {
                Name = "Western Digital Corp",
                Address = "San Jose, California, United States"
            },
            new Manufacturer
            {
                Name = "Seagate Technology LLC",
                Address = "Dublin City, Ireland"
            },
            new Manufacturer
            {
                Name = "ADATA Technology Co., Ltd.",
                Address = "Zhonghe District, New Taipei City, Taiwan"
            },
            new Manufacturer
            {
                Name = "Team Group Inc",
                Address = "Zhonghe District, New Taipei City, Taiwan"
            },
            new Manufacturer
            {
                Name = "Samsung Electronics Co., Ltd.",
                Address = "Yeongtong District, Suwon City, Korea"
            },
            new Manufacturer
            {
                Name = "NZXT Inc",
                Address = "Los Angels, California, United States"
            },
            new Manufacturer
            {
                Name = "Kingston Technology Corp",
                Address = "Fountain Valley, California, United States"
            }
        );

        context.SaveChanges();
    }
}