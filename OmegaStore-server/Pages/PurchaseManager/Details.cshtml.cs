using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using OmegaStore_server.Data;
using OmegaStore_server.Models;

namespace OmegaStore_server.Pages_PurchaseManager
{
    public class DetailsModel : PageModel
    {
        private readonly OmegaStore_server.Data.OmegaStoreContext _context;

        public DetailsModel(OmegaStore_server.Data.OmegaStoreContext context)
        {
            _context = context;
        }

        public Purchase Purchase { get; set; } = default!;
        public IList<PurchaseItem> Items = default!;

        public async Task<IActionResult> OnGetAsync(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var purchase = await _context.Purchase
            .Include(pc => pc.Account)
            .Include(pc => pc.Items)
            .ThenInclude(pi => pi.Product)
            .ThenInclude(p => p!.Category)
            .FirstOrDefaultAsync(m => m.Id == id);

            if (purchase is not null && purchase.Items is not null)
            {
                Purchase = purchase;
                Items = purchase.Items.ToList();

                return Page();
            }

            return NotFound();
        }
    }
}