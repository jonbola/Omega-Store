using System.ComponentModel.DataAnnotations;

namespace OmegaStore_server.Models;

public class Product
{
    public long Id { get; set; }
    public required string Name { get; set; }
    public required decimal Price { get; set; }
    public string? Image { get; set; }
    public string? Description { get; set; }
    public ICollection<Category>? Categories { get; set; }
    public int? Stock { get; set; }
}