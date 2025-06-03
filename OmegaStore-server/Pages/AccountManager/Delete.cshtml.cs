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
    public class DeleteModel : PageModel
    {
        private readonly OmegaStore_server.Data.OmegaStoreContext _context;

        public DeleteModel(OmegaStore_server.Data.OmegaStoreContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Account Account { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var account = await _context.Account.Include(a => a.AccountInfo).FirstOrDefaultAsync(m => m.Id == id);

            if (account is not null)
            {
                Account = account;

                return Page();
            }

            return NotFound();
        }

        public async Task<IActionResult> OnPostAsync(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var account = await _context.Account.Include(a => a.AccountInfo).FirstOrDefaultAsync(m => m.Id == id);

            if (account != null)
            {
                try
                {
                    _context.Account.Remove(account);

                    await _context.SaveChangesAsync();
                }

                catch (DbUpdateConcurrencyException)
                {
                    return StatusCode(409, "Data has been changed by another method");
                }
            }

            return RedirectToPage("./Index");
        }
    }
}