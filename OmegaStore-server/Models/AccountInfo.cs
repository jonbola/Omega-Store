using System.ComponentModel.DataAnnotations;

namespace OmegaStore_server.Models;

public class AccountInfo
{
    public long Id { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? AvatarImage { get; set; }
    public required string Email { get; set; }
    public string? PhoneNumber { get; set; }
    public string? Gender { get; set; }
    public string? Nation { get; set; }
    [DataType(DataType.Date)]
    public DateTime? BirthDate { get; set; }
    public long AccountId { get; set; }
}