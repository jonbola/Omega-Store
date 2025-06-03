using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using OmegaStore_server.Data;
using OmegaStore_server.Models;

namespace OmegaStore_server.Pages_AccountManager
{
    public class IndexModel : PageModel
    {
        private readonly OmegaStore_server.Data.OmegaStoreContext _context;

        public IndexModel(OmegaStore_server.Data.OmegaStoreContext context)
        {
            _context = context;
        }

        public IList<Account> Accounts { get; set; } = default!;

        [BindProperty(SupportsGet = true)]
        [Display(Prompt = "Input username to search")]
        public string? SearchString { get; set; } = default!;

        public async Task OnGetAsync()
        {
            var nonInfoAccount = await _context.Account
            .GroupJoin(
                _context.AccountInfo,
                account => account.Id,
                info => info.AccountId,
                (account, info) => new { account, info })
                .Where(x => !x.info.Any())
                .Select(x => x.account)
                .ToListAsync();

            if (nonInfoAccount.Any())
            {
                _context.Account.RemoveRange(nonInfoAccount);
                await _context.SaveChangesAsync();
            }

            Accounts = await _context.Account.ToListAsync();

            if (!string.IsNullOrEmpty(SearchString))
            {
                Accounts = Accounts.Where(a => a.AccountName.ToLower().Contains(SearchString.ToLower())).ToList();
            }
        }

        public async Task<JsonResult> OnGetRecords()
        {
            var accountList = await _context.Account
            .Include(a => a.Purchases)
            .ThenInclude(pc => pc.Items)
            .ThenInclude(pi => pi.Product)
            .Include(a => a.AccountInfo)
            .Select(a => new
            {
                a.AccountName,
                a.Password,
                a.Role,
                a.Editable,
                a.Deletable,
                a.CreatedDate,
                AccountInfo = a.AccountInfo != null ? new
                {
                    a.AccountInfo.Id,
                    a.AccountInfo.FirstName,
                    a.AccountInfo.LastName,
                    a.AccountInfo.AvatarImage,
                    a.AccountInfo.Email,
                    a.AccountInfo.PhoneNumber,
                    a.AccountInfo.Gender,
                    a.AccountInfo.Nation,
                    a.AccountInfo.BirthDate,
                    a.AccountInfo.AccountId
                } : null,
                Purchases = a.Purchases != null ? a.Purchases.Select(pc => new
                {
                    pc.Id,
                    pc.TotalPurchase,
                    pc.PurchaseDate,
                    pc.AccountId,
                    Items = pc.Items.Select(pi => new
                    {
                        pi.Id,
                        pi.PurchaseId,
                        pi.Quantity,
                        Product = pi.Product != null ? new
                        {
                            pi.Product.Id,
                            pi.Product.Name,
                            pi.Product.Price,
                            pi.Product.Stock,
                            pi.Product.WarrantyPeriod
                        } : null
                    }).ToList()
                }).ToList() : null
            })
            .ToListAsync();

            return new JsonResult(accountList, new JsonSerializerOptions
            {
                WriteIndented = true
            });
        }
    }
}