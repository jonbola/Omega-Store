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
using Files = System.IO.File;

namespace OmegaStore_server.Pages_ProductManager
{
    public class EditModel : PageModel
    {
        private readonly OmegaStore_server.Data.OmegaStoreContext _context;

        public EditModel(OmegaStore_server.Data.OmegaStoreContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Product Product { get; set; } = default!;

        public List<SelectListItem> CategoryList { get; set; } = default!;

        public List<SelectListItem> ManufacturerList { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var product = await _context.Product.Include(p => p.Category).Include(p => p.Manufacturer).FirstOrDefaultAsync(p => p.Id == id);

            if (product == null)
            {
                return NotFound();
            }

            Product = product;

            CategoryList = await ValueList.SelectCategoryList(_context);
            ManufacturerList = await ValueList.SelectManufacturerList(_context);

            return Page();
        }

        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more information, see https://aka.ms/RazorPagesCRUD.
        public async Task<IActionResult> OnPostAsync(IFormFile Image)
        {
            if (!ModelState.IsValid)
            {
                CategoryList = await ValueList.SelectCategoryList(_context);
                ManufacturerList = await ValueList.SelectManufacturerList(_context);

                return Page();
            }

            try
            {
                await UpdateImageDirectory(Image);
            }
            catch (Exception ex)
            {
                ModelState.AddModelError(string.Empty, $"Error update image data: {ex.Message}");
                return Page();
            }

            _context.Attach(Product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(Product.Id))
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

        private bool ProductExists(long id)
        {
            return _context.Product.Any(e => e.Id == id);
        }

        public async Task UpdateImageDirectory(IFormFile Image)
        {
            string currentImage = "", currentImagePath = "";

            if (Product.Image != null)
            {
                currentImage = Product.Image;
                currentImagePath = Path.Combine(Directory.GetCurrentDirectory(), "Assets/Images/Products/" + currentImage);
            }

            if (Image != null)
            {
                string newImage = Path.GetFileName(Image.FileName);
                string newImagePath = Path.Combine(Directory.GetCurrentDirectory(), "Assets/Images/Products/" + newImage);

                if (!_context.Product.Where(p => p.Image == currentImage && p.Id != Product.Id).Any() && newImage != currentImage)
                {
                    if (Files.Exists(currentImagePath))
                    {
                        Files.Delete(currentImagePath);
                    }
                }

                using (var newImageStream = new FileStream(newImagePath, FileMode.Create))
                {
                    await Image.CopyToAsync(newImageStream);
                }

                Product.Image = newImage;
            }
        }
    }
}