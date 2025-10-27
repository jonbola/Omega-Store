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

namespace OmegaStore_server.Pages_CategoryManager
{
    public class IndexModel : PageModel
    {
        private readonly OmegaStore_server.Data.OmegaStoreContext _context;

        public IndexModel(OmegaStore_server.Data.OmegaStoreContext context)
        {
            _context = context;
        }

        public IList<Category> Categories { get; set; } = default!;

        [BindProperty(SupportsGet = true)]
        [Display(Prompt = "Input category's name to search")]
        public string? SearchString { get; set; } = default!;

        public async Task OnGetAsync()
        {
            Categories = await _context.Category.Include(c => c.Products).ToListAsync();

            if (!string.IsNullOrEmpty(SearchString))
            {
                Categories = Categories.Where(c => c.Name.ToLower().Contains(SearchString.ToLower())).ToList();
            }
        }

        public async Task<JsonResult> OnGetPullRecords()
        {
            var categoryList = await _context.Category
            .Include(c => c.Products)
            .Select(c => new
            {
                _id = c.Id,
                _name = c.Name,
                _description = c.Description,
                _products = c.Products != null ? c.Products.Select(p => new
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
                    _manufacturerId = p.ManufacturerId
                }) : null
            }).ToListAsync();

            return new JsonResult(categoryList, new JsonSerializerOptions
            {
                WriteIndented = true
            });
        }
    }
}