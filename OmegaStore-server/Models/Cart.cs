using System.ComponentModel.DataAnnotations;

namespace OmegaStore_server.Models;

public class Cart
{
    public long Id { get; set; }
    public int TotalQuantitesProduct { get; set; }
    public int TotalPrice { get; set; }
    public int AccountId { get; set; }
}