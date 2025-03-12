using System.ComponentModel.DataAnnotations;

namespace OmegaStore_server.Models;

public class Category
{
    public long Id { get; set; }
    public required string Name { get; set; }
    public string? Description { get; set; }
    public ICollection<Product>? Products { get; set; }
}