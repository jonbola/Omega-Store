using System.ComponentModel.DataAnnotations;
using OmegaStore_server.Data;

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

    public static void CreateSeedData(OmegaStoreContext context)
    {
        context.AccountInfo.AddRange(
            new AccountInfo
            {
                FirstName = "Admin",
                LastName = "",
                Email = "admin@gmail.com",
                PhoneNumber = "0123456789",
                Gender = "m",
                Nation = "vietnam",
                BirthDate = DateTime.Parse("2001-01-30"),
                AccountId = 1
            },

            new AccountInfo
            {
                FirstName = "Phuc",
                LastName = "Nguyen",
                Email = "phuc.nguyen@gmail.com",
                PhoneNumber = "05912321215",
                Gender = "m",
                Nation = "vietnam",
                BirthDate = DateTime.Parse("2003-05-10"),
                AccountId = 2
            },

            new AccountInfo
            {
                FirstName = "Jon",
                LastName = "Clocket",
                Email = "jon.clocket@gmail.com",
                PhoneNumber = "02313211239",
                Gender = "m",
                Nation = "united-states",
                BirthDate = DateTime.Parse("2004-02-20"),
                AccountId = 3
            }
        );

        context.SaveChanges();
    }
}