using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
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

        public IList<Manufacturer> Manufacturers { get; set; } = default!;

        [BindProperty(SupportsGet = true)]
        [Display(Prompt = "Input manufacturer's name to search")]
        public string? SearchString { get; set; } = default!;

        public async Task OnGetAsync()
        {
            Manufacturers = await _context.Manufacturer.Include(m => m.Products).ToListAsync();

            if (!string.IsNullOrEmpty(SearchString))
            {
                Manufacturers = Manufacturers.Where(m => m.Name.ToLower().Contains(SearchString.ToLower())).ToList();
            }
        }

        public async Task<JsonResult> OnGetRecords()
        {
            var manufacturerList = await _context.Manufacturer.Include(c => c.Products).ToListAsync();

            return new JsonResult(manufacturerList, new JsonSerializerOptions
            {
                ReferenceHandler = ReferenceHandler.Preserve,
                WriteIndented = true
            });
        }
    }
}
