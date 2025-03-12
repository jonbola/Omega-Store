using Microsoft.EntityFrameworkCore;
using OmegaStore_server.Data;

namespace OmegaStore_server.Models;

public static class SeedData
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new OmegaStoreContext(serviceProvider.GetRequiredService<DbContextOptions<OmegaStoreContext>>()))
        {
            if (context == null || context.Account == null || context.AccountInfo == null)
            {
                throw new ArgumentNullException("Null OmegaStoreContext");
            }
            if (context.Account.Any() || context.AccountInfo.Any())
            {
                return;
            }
            context.Account.AddRange(
                new Account
                {
                    AccountName = "admin@123",
                    Password = "1",
                    Role = true,
                    Editable = false,
                    Deletable = false,
                    CreatedDate = DateTime.Parse("2025-02-15T12:00:00")
                },
                new Account
                {
                    AccountName = "phuc",
                    Password = "123",
                    Role = false,
                    Editable = true,
                    Deletable = true,
                    CreatedDate = DateTime.Parse("2025-02-15T12:00:00")
                },
                new Account
                {
                    AccountName = "mrjon",
                    Password = "123",
                    Role = false,
                    Editable = true,
                    Deletable = true,
                    CreatedDate = DateTime.Parse("2025-02-15T12:00:00")
                }
            );
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
}