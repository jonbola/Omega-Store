using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OmegaStore_server.Data;

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

    public required ICollection<Purchase> Purchases { get; set; }

    public AccountInfo? AccountInfo { get; set; }

    [Timestamp]
    public byte[]? AsyncVersion { get; set; }

    public static void CreateSeedData(OmegaStoreContext context)
    {
        context.Account.AddRange(
            new Account
            {
                AccountName = "admin@123",
                Password = "1",
                Role = true,
                Editable = false,
                Deletable = false,
                CreatedDate = DateTime.Parse("2025-02-15T12:00:00"),
                Purchases = new List<Purchase>()
            },

            new Account
            {
                AccountName = "phuc",
                Password = "123",
                Role = false,
                Editable = true,
                Deletable = true,
                CreatedDate = DateTime.Parse("2025-02-15T12:00:00"),
                Purchases = new List<Purchase>()
            },

            new Account
            {
                AccountName = "mrjon",
                Password = "123",
                Role = false,
                Editable = true,
                Deletable = true,
                CreatedDate = DateTime.Parse("2025-02-15T12:00:00"),
                Purchases = new List<Purchase>()
            }
        );

        context.SaveChanges();
    }
}