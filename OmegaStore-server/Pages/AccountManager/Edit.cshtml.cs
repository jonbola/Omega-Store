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
    public class EditModel : PageModel
    {
        private readonly OmegaStore_server.Data.OmegaStoreContext _context;

        public EditModel(OmegaStore_server.Data.OmegaStoreContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Account Account { get; set; } = default!;

        [BindProperty]
        public AccountInfo AccountInfo { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var account = await _context.Account.FirstOrDefaultAsync(m => m.Id == id);
            var accountInfo = await _context.AccountInfo.FirstOrDefaultAsync(m => m.AccountId == id);

            if (account == null || accountInfo == null)
            {
                return NotFound();
            }

            Account = account;
            AccountInfo = accountInfo;

            return Page();
        }

        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more information, see https://aka.ms/RazorPagesCRUD.
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            Account.Editable = true;
            _context.Attach(Account).State = EntityState.Modified;
            _context.Attach(AccountInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccountExists(Account.Id) && !AccountInfoExists(AccountInfo.AccountId))
                {
                    return NotFound();
                }

                else
                {
                    throw;
                }
            }

            return RedirectToPage("./Index");
        }

        private bool AccountExists(long id)
        {
            return _context.Account.Any(e => e.Id == id);
        }

        private bool AccountInfoExists(long accountId)
        {
            return _context.AccountInfo.Any(e => e.AccountId == accountId);
        }
    }
}