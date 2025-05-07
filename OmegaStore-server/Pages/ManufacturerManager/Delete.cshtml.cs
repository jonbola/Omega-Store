using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using OmegaStore_server.Data;
using OmegaStore_server.Models;

namespace OmegaStore_server.Pages_ManufacturerManager
{
    public class DeleteModel : PageModel
    {
        private readonly OmegaStore_server.Data.OmegaStoreContext _context;

        public DeleteModel(OmegaStore_server.Data.OmegaStoreContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Manufacturer Manufacturer { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var manufacturer = await _context.Manufacturer.FirstOrDefaultAsync(m => m.Id == id);

            if (manufacturer is not null)
            {
                Manufacturer = manufacturer;

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

            var manufacturer = await _context.Manufacturer.FindAsync(id);
            if (manufacturer != null)
            {
                if (_context.Product.Any(p => p.ManufacturerId == manufacturer.Id))
                {
                    TempData["ErrorMessage"] = "Cannot delete this manufacturer item. This item has been used by other product items!";
                    Manufacturer = manufacturer;
                    return Page();
                }

                Manufacturer = manufacturer;
                _context.Manufacturer.Remove(Manufacturer);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}