using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OmegaStore_server.Models;

namespace OmegaStore_server.Data
{
    public class OmegaStoreDatabase : DbContext
    {
        public OmegaStoreDatabase (DbContextOptions<OmegaStoreDatabase> options)
            : base(options)
        {
        }

        public DbSet<OmegaStore_server.Models.Account> Account { get; set; } = default!;
    }
}
