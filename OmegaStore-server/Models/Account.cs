using System.ComponentModel.DataAnnotations;

namespace OmegaStore_server.Models;

public class Account
{
    public long Id { get; set; }
    public required string AccountName { get; set; }
    public required string Password { get; set; }
    public required bool Role { get; set; }
    public required bool Editable { get; set; }
    public required bool Deletable { get; set; }
    [DataType(DataType.DateTime)]
    public required DateTime CreatedDate { get; set; }
    public required AccountInfo Info { get; set; }
}