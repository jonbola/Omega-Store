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

        public async Task<JsonResult> OnGetPullRecords()
        {
            var purchaseList = await _context.Purchase
            .Include(pc => pc.Items)
            .ThenInclude(i => i.Product)
            .Select(pc => new
            {
                _id = pc.Id,
                _totalPurchase = pc.TotalPurchase,
                _purchaseDate = pc.PurchaseDate,
                _status = pc.Status,
                _accountId = pc.AccountId,
                _account = pc.Account != null ? new
                {
                    _id = pc.Account.Id,
                    _accountName = pc.Account.AccountName,
                    _password = pc.Account.Password,
                    _role = pc.Account.Role,
                    _editable = pc.Account.Editable,
                    _deletable = pc.Account.Deletable,
                    _createdDate = pc.Account.CreatedDate
                } : null,
                _items = pc.Items != null ? pc.Items.Select(i => new
                {
                    _id = i.Id,
                    _quantity = i.Quantity,
                    _purchaseId = i.PurchaseId,
                    _productId = i.ProductId,
                    _product = i.Product != null ? new
                    {
                        _id = i.Product.Id,
                        _name = i.Product.Name,
                        _price = i.Product.Price,
                        _image = i.Product.Image,
                        _description = i.Product.Description,
                        _stock = i.Product.Stock,
                        _warrantyPeriod = i.Product.WarrantyPeriod,
                        _createdDate = i.Product.CreatedDate,
                        _sale = i.Product.Sale,
                        _categoryId = i.Product.CategoryId,
                        _manufacturerId = i.Product.ManufacturerId
                    } : null
                }) : null
            })
            .ToListAsync();

            return new JsonResult(purchaseList, new JsonSerializerOptions
            {
                WriteIndented = true
            });
        }
    }
}