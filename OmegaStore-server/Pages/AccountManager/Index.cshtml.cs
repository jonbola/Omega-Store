using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using OmegaStore_server.Data;
using OmegaStore_server.Models;

namespace OmegaStore_server.Pages_AccountManager
{
    public class IndexModel : PageModel
    {
        private readonly OmegaStore_server.Data.OmegaStoreContext _context;

        public IndexModel(OmegaStore_server.Data.OmegaStoreContext context)
        {
            _context = context;
        }

        public IList<Account> Accounts { get; set; } = default!;

        [BindProperty(SupportsGet = true)]
        [Display(Prompt = "Input username to search")]
        public string? SearchString { get; set; } = default!;

        public async Task OnGetAsync()
        {
            var nonInfoAccount = await _context.Account
            .GroupJoin(
                _context.AccountInfo,
                account => account.Id,
                info => info.AccountId,
                (account, info) => new { account, info })
                .Where(x => !x.info.Any())
                .Select(x => x.account)
                .ToListAsync();

            if (nonInfoAccount.Any())
            {
                _context.Account.RemoveRange(nonInfoAccount);
                await _context.SaveChangesAsync();
            }

            Accounts = await _context.Account.ToListAsync();

            if (!string.IsNullOrEmpty(SearchString))
            {
                Accounts = Accounts.Where(a => a.AccountName.ToLower().Contains(SearchString.ToLower())).ToList();
            }
        }

        public async Task<JsonResult> OnGetPullRecords()
        {
            var accountList = await _context.Account
            .Include(a => a.Purchases!)
            .ThenInclude(pc => pc.Items)
            .ThenInclude(pi => pi.Product)
            .Include(a => a.AccountInfo)
            .Select(a => new
            {
                _id = a.Id,
                _accountName = a.AccountName,
                _password = a.Password,
                _role = a.Role,
                _editable = a.Editable,
                _deletable = a.Deletable,
                _createDate = a.CreatedDate,
                _accountInfo = a.AccountInfo != null ? new
                {
                    _id = a.AccountInfo.Id,
                    _firstName = a.AccountInfo.FirstName,
                    _lastName = a.AccountInfo.LastName,
                    _avatarImage = a.AccountInfo.AvatarImage,
                    _email = a.AccountInfo.Email,
                    _phoneNumber = a.AccountInfo.PhoneNumber,
                    _gender = a.AccountInfo.Gender,
                    _nation = a.AccountInfo.Nation,
                    _birthDate = a.AccountInfo.BirthDate,
                    _accountId = a.AccountInfo.AccountId
                } : null,
                _purchases = a.Purchases != null ? a.Purchases.Select(pc => new
                {
                    _id = pc.Id,
                    _totalPurchase = pc.TotalPurchase,
                    _purchaseDate = pc.PurchaseDate,
                    _accountId = pc.AccountId,
                    _items = pc.Items.Select(pi => new
                    {
                        _id = pi.Id,
                        _quantity = pi.Quantity,
                        _purchaseId = pi.PurchaseId,
                        _product = pi.Product != null ? new
                        {
                            _id = pi.Product.Id,
                            _name = pi.Product.Name,
                            _price = pi.Product.Price,
                            _image = pi.Product.Image,
                            _description = pi.Product.Description,
                            _stock = pi.Product.Stock,
                            _warrantyPeriod = pi.Product.WarrantyPeriod,
                            _createdDate = pi.Product.CreatedDate,
                            _sale = pi.Product.Sale,
                            _categoryId = pi.Product.CategoryId,
                            _manufacturerId = pi.Product.ManufacturerId
                        } : null
                    }).ToList()
                }).ToList() : null
            })
            .ToListAsync();

            return new JsonResult(accountList, new JsonSerializerOptions
            {
                WriteIndented = true
            });
        }
    }
}