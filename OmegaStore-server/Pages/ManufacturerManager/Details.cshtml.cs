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
    public class DetailsModel : PageModel
    {
        private readonly OmegaStore_server.Data.OmegaStoreContext _context;

        public DetailsModel(OmegaStore_server.Data.OmegaStoreContext context)
        {
            _context = context;
        }

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
    }
}
