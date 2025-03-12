using System.ComponentModel.DataAnnotations;

namespace OmegaStore_server.Models;

public class Account
{
    public long Id { get; set; }

    [Display(Name = "Account Name")]
    public required string AccountName { get; set; }

    public required string Password { get; set; }

    public required bool Role { get; set; }

    public required bool Editable { get; set; }

    public required bool Deletable { get; set; }

    [DataType(DataType.DateTime)]
    [Display(Name = "Created Date")]
    public required DateTime CreatedDate { get; set; }

    public ICollection<Purchase>? Purchases { get; set; }

    [Timestamp]
    public byte[]? AsyncVersion { get; set; }
}