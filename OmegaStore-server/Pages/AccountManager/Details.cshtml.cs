using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using OmegaStore_server.Data;
using OmegaStore_server.Models;

namespace OmegaStore_server.Pages_AccountManager
{
    public class DetailsModel : PageModel
    {
        private readonly OmegaStore_server.Data.OmegaStoreContext _context;

        public DetailsModel(OmegaStore_server.Data.OmegaStoreContext context)
        {
            _context = context;
        }

        public Account Account { get; set; } = default!;

        public AccountInfo AccountInfo { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var account = await _context.Account.FirstOrDefaultAsync(m => m.Id == id);
            var accountInfo = await _context.AccountInfo.FirstOrDefaultAsync(m => m.AccountId == id);

            if (account is not null && accountInfo is not null)
            {
                Account = account;
                AccountInfo = accountInfo;

                return Page();
            }

            return NotFound();
        }
    }
}