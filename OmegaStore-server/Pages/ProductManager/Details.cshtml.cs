using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using OmegaStore_server.Data;
using OmegaStore_server.Models;

namespace OmegaStore_server.Pages_ProductManager
{
    public class DetailsModel : PageModel
    {
        private readonly OmegaStore_server.Data.OmegaStoreContext _context;

        public DetailsModel(OmegaStore_server.Data.OmegaStoreContext context)
        {
            _context = context;
        }

        public Product Product { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var product = await _context.Product.Include(p => p.Category).Include(p => p.Manufacturer).FirstOrDefaultAsync(p => p.Id == id);


            if (product is not null)
            {
                Product = product;

                return Page();
            }

            return NotFound();
        }
    }
}
