using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using OmegaStore_server.Data;
using OmegaStore_server.Models;

namespace OmegaStore_server.Pages_PurchaseManager
{
    public class IndexModel : PageModel
    {
        private readonly OmegaStore_server.Data.OmegaStoreContext _context;

        public IndexModel(OmegaStore_server.Data.OmegaStoreContext context)
        {
            _context = context;
        }

        public IList<Purchase> Purchases { get; set; } = default!;


        public async Task OnGetAsync()
        {
            Purchases = await _context.Purchase.Include(p => p.Account).ToListAsync();
        }

        public async Task<JsonResult> OnGetRecords()
        {
            var purchaseList = await _context.Purchase.Include(pc => pc.Items).ToListAsync();

            return new JsonResult(purchaseList, new JsonSerializerOptions
            {
                ReferenceHandler = ReferenceHandler.Preserve,
                WriteIndented = true
            });
        }
    }
}
