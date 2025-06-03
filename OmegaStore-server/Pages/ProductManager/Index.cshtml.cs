using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using OmegaStore_server.Data;
using OmegaStore_server.Models;

namespace OmegaStore_server.Pages_ProductManager
{
    public class IndexModel : PageModel
    {
        private readonly OmegaStore_server.Data.OmegaStoreContext _context;

        public IndexModel(OmegaStore_server.Data.OmegaStoreContext context)
        {
            _context = context;
        }

        public IList<Product> Products { get; set; } = default!;

        [BindProperty(SupportsGet = true)]
        [Display(Prompt = "Input product's name to search")]
        public string? SearchString { get; set; } = default!;

        public async Task OnGetAsync()
        {
            Products = await _context.Product.Include(p => p.Category).Include(p => p.Manufacturer).ToListAsync();

            if (!string.IsNullOrEmpty(SearchString))
            {
                Products = Products.Where(p => p.Name.ToLower().Contains(SearchString.ToLower())).ToList();
            }
        }
    }
}