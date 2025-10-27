using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json;
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

        public async Task<JsonResult> OnGetPullRecords()
        {
            var productList = await _context.Product
            .Include(p => p.Category)
            .Include(p => p.Manufacturer)
            .Select(p => new
            {
                _id = p.Id,
                _name = p.Name,
                _price = p.Price,
                _image = p.Image,
                _description = p.Description,
                _stock = p.Stock,
                _warrantyPeriod = p.WarrantyPeriod,
                _createdDate = p.CreatedDate,
                _sale = p.Sale,
                _categoryId = p.CategoryId,
                _category = p.Category != null ? new
                {
                    _id = p.Category.Id,
                    _name = p.Category.Name,
                    _description = p.Category.Description
                } : null,
                _manufacturerId = p.ManufacturerId,
                _manufacturer = p.Manufacturer != null ? new
                {
                    _id = p.Manufacturer.Id,
                    _name = p.Manufacturer.Name,
                    _address = p.Manufacturer.Address
                } : null
            })
            .ToListAsync();

            return new JsonResult(productList, new JsonSerializerOptions
            {
                WriteIndented = true
            });
        }
    }
}