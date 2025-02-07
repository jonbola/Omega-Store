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
        private readonly OmegaStore_server.Data.OmegaStoreDatabase _context;

        public DetailsModel(OmegaStore_server.Data.OmegaStoreDatabase context)
        {
            _context = context;
        }

        public Account Account { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var account = await _context.Account.FirstOrDefaultAsync(m => m.Id == id);

            if (account is not null)
            {
                Account = account;

                return Page();
            }

            return NotFound();
        }
    }
}
