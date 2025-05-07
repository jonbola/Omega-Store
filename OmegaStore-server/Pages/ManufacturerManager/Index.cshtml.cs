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
    public class IndexModel : PageModel
    {
        private readonly OmegaStore_server.Data.OmegaStoreContext _context;

        public IndexModel(OmegaStore_server.Data.OmegaStoreContext context)
        {
            _context = context;
        }

        public IList<Manufacturer> Manufacturer { get; set; } = default!;

        public List<Product> Products { get; set; } = default!;

        public async Task OnGetAsync()
        {
            Manufacturer = await _context.Manufacturer.Include(m => m.Products).ToListAsync();
        }
    }
}
