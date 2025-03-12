using System.ComponentModel.DataAnnotations;

namespace OmegaStore_server.Models;

public class Purchase
{
    public long Id { get; set; }
    [Display(Name = "Item")]
    public required ICollection<PurchaseItem> Items { get; set; }
    [Display(Name = "Total Purchase")]
    public required decimal TotalPurchase { get; set; }
    [DataType(DataType.DateTime)]
    [Display(Name = "Purchase Date")]
    public required DateTime PurchaseDate { get; set; }
    public required long AccountId { get; set; }
}