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

namespace OmegaStore_server.Pages_AccountInfoManager
{
    public class EditModel : PageModel
    {
        private readonly OmegaStore_server.Data.OmegaStoreContext _context;

        public EditModel(OmegaStore_server.Data.OmegaStoreContext context)
        {
            _context = context;
        }

        [BindProperty]
        public AccountInfo AccountInfo { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var accountinfo =  await _context.AccountInfo.FirstOrDefaultAsync(m => m.Id == id);
            if (accountinfo == null)
            {
                return NotFound();
            }
            AccountInfo = accountinfo;
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

            _context.Attach(AccountInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccountInfoExists(AccountInfo.Id))
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

        private bool AccountInfoExists(long id)
        {
            return _context.AccountInfo.Any(e => e.Id == id);
        }
    }
}
