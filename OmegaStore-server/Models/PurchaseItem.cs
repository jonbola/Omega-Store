using System.ComponentModel.DataAnnotations;

namespace OmegaStore_server.Models;

public class PurchaseItem
{
    public long Id { get; set; }
    public required Product Product { get; set; }
    public required int Quantity { get; set; }
    public required decimal Price { get; set; }
    public required long PurchaseId { get; set; }
}