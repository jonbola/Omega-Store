using System.ComponentModel.DataAnnotations;

namespace OmegaStore_server.Models;

public class AccountInfo
{
    public long Id { get; set; }

    [Display(Name = "First Name")]
    public string? FirstName { get; set; }

    [Display(Name = "Last Name")]
    public string? LastName { get; set; }

    public string? AvatarImage { get; set; }

    [EmailAddress(ErrorMessage = "Email format is incorrect.")]
    public required string Email { get; set; }

    [Display(Name = "Phone Number")]
    public string? PhoneNumber { get; set; }

    public string? Gender { get; set; }

    public string? Nation { get; set; }

    [DataType(DataType.Date)]
    [Display(Name = "Birth Date")]
    public DateTime? BirthDate { get; set; }

    [Display(Name = "Account Id")]
    public required long AccountId { get; set; }

    [Timestamp]
    public byte[]? AsyncVersion { get; set; }
}