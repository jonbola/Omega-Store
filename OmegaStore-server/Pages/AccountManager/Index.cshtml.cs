using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
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

        public IList<Account> Account { get; set; } = default!;

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

            Account = await _context.Account.ToListAsync();
        }
    }
}