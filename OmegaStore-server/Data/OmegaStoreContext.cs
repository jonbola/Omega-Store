using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OmegaStore_server.Models;

namespace OmegaStore_server.Data
{
    public class OmegaStoreContext : DbContext
    {
        public OmegaStoreContext(DbContextOptions<OmegaStoreContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Account>()
            .HasOne(a => a.AccountInfo)
            .WithOne(ai => ai.Account)
            .HasForeignKey<AccountInfo>(ai => ai.AccountId)
            .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Account>()
            .HasMany(a => a.Purchases)
            .WithOne(pc => pc.Account)
            .HasForeignKey(pc => pc.AccountId)
            .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Purchase>()
            .HasMany(pc => pc.Items)
            .WithOne(pi => pi.Purchase)
            .HasForeignKey(pi => pi.PurchaseId);

            modelBuilder.Entity<Product>()
            .HasMany(p => p.PurchaseItems)
            .WithOne(pi => pi.Product)
            .HasForeignKey(pi => pi.ProductId);

            modelBuilder.Entity<Category>()
            .HasMany(c => c.Products)
            .WithOne(p => p.Category)
            .HasForeignKey(p => p.CategoryId);

            modelBuilder.Entity<Manufacturer>()
            .HasMany(m => m.Products)
            .WithOne(p => p.Manufacturer)
            .HasForeignKey(p => p.ManufacturerId);

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<OmegaStore_server.Models.Account> Account { get; set; } = default!;
        public DbSet<OmegaStore_server.Models.AccountInfo> AccountInfo { get; set; } = default!;
        public DbSet<OmegaStore_server.Models.Product> Product { get; set; } = default!;
        public DbSet<OmegaStore_server.Models.Category> Category { get; set; } = default!;
        public DbSet<OmegaStore_server.Models.Manufacturer> Manufacturer { get; set; } = default!;
        public DbSet<OmegaStore_server.Models.Purchase> Purchase { get; set; } = default!;
        public DbSet<OmegaStore_server.Models.PurchaseItem> PurchaseItem { get; set; } = default!;
    }
}