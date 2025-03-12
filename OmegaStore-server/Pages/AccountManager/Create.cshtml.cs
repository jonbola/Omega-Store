using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using Newtonsoft.Json;
using OmegaStore_server.Data;
using OmegaStore_server.Models;

namespace OmegaStore_server.Pages_AccountManager
{
    public class CreateModel : PageModel
    {
        private readonly OmegaStore_server.Data.OmegaStoreContext _context;

        public CreateModel(OmegaStore_server.Data.OmegaStoreContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public Account Account { get; set; } = default!;

        // For more information, see https://aka.ms/RazorPagesCRUD.
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            var existingAccount = await _context.Account.FirstOrDefaultAsync(a => a.AccountName == Account.AccountName);

            if (existingAccount != null)
            {
                ModelState.AddModelError("Account.AccountName", "Account already exists.");
                return Page();
            }

            _context.Account.Add(Account);
            await _context.SaveChangesAsync();

            return RedirectToPage("/AccountInfoManager/Create", Account);
        }
    }
}