using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using OmegaStore_server.Data;
using OmegaStore_server.Models;
using Files = System.IO.File;

namespace OmegaStore_server.Pages_ProductManager
{
    public class DeleteModel : PageModel
    {
        private readonly OmegaStore_server.Data.OmegaStoreContext _context;

        public DeleteModel(OmegaStore_server.Data.OmegaStoreContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Product Product { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var product = await _context.Product.Include(p => p.Category).Include(p => p.Manufacturer).FirstOrDefaultAsync(m => m.Id == id);

            if (product is not null)
            {
                Product = product;

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

            var product = await _context.Product.FindAsync(id);

            if (product != null)
            {
                Product = product;
                UpdateImageDirectory();

                _context.Product.Remove(Product);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }

        public void UpdateImageDirectory()
        {
            string currentImage = "", currentImagePath = "";

            if (Product.Image != null)
            {
                currentImage = Product.Image;
                currentImagePath = Path.Combine(Directory.GetCurrentDirectory(), "Assets/Images/Products/" + currentImage);
            }

            if (!_context.Product.Any(p => p.Image == currentImage && p.Id != Product.Id))
            {
                if (Files.Exists(currentImagePath))
                {
                    Files.Delete(currentImagePath);
                }
            }
        }
    }
}
