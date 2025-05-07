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

namespace OmegaStore_server.Pages_ProductManager
{
    public class CreateModel : PageModel
    {
        private readonly OmegaStore_server.Data.OmegaStoreContext _context;

        public CreateModel(OmegaStore_server.Data.OmegaStoreContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> OnGet()
        {
            SelectCategoryList = await ValueList.SelectCategoryList(_context);
            SelectManufacturerList = await ValueList.SelectManufacturerList(_context);

            return Page();
        }

        [BindProperty]
        public Product Product { get; set; } = default!;

        public List<SelectListItem> SelectCategoryList { get; set; } = default!;

        public List<SelectListItem> SelectManufacturerList { get; set; } = default!;

        // For more information, see https://aka.ms/RazorPagesCRUD.
        public async Task<IActionResult> OnPostAsync(IFormFile Image)
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            await SetImageData(Image);

            _context.Product.Add(Product);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }

        public async Task SetImageData(IFormFile Image)
        {
            if (Image != null && Image.Length > 0)
            {
                var newImage = Path.GetFileName(Image.FileName);
                var newImagePath = Path.Combine(Directory.GetCurrentDirectory(), "Assets/Images/Products/" + newImage);

                using (var fileStream = new FileStream(newImagePath, FileMode.Create))
                {
                    await Image.CopyToAsync(fileStream);
                }

                Product.Image = newImage;
            }
        }
    }
}