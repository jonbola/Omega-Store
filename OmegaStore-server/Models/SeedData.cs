using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OmegaStore_server.Data;

namespace OmegaStore_server.Models;

public static class SeedData
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new OmegaStoreContext(serviceProvider.GetRequiredService<DbContextOptions<OmegaStoreContext>>()))
        {
            if (context == null || context.Account == null || context.AccountInfo == null || context.Product == null || context.Category == null || context.Manufacturer == null)
            {
                throw new ArgumentNullException("Null OmegaStoreContext");
            }
            if (context.Account.Any() || context.AccountInfo.Any() || context.Product.Any() || context.Category.Any() || context.Manufacturer.Any())
            {
                return;
            }

            Account.CreateSeedData(context);
            AccountInfo.CreateSeedData(context);
            Category.CreateSeedData(context);
            Manufacturer.CreateSeedData(context);
            Product.CreateSeedData(context);
        }
    }
}