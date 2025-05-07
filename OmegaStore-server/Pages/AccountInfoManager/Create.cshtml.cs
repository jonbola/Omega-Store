using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Identity.Client;
using Newtonsoft.Json;
using OmegaStore_server.Data;
using OmegaStore_server.Models;

namespace OmegaStore_server.Pages_AccountInfoManager
{
    public class CreateModel : PageModel
    {
        private readonly OmegaStore_server.Data.OmegaStoreContext _context;

        public CreateModel(OmegaStore_server.Data.OmegaStoreContext context)
        {
            _context = context;
        }

        public IActionResult OnGet(Account account)
        {
            AccountInfo = new AccountInfo
            {
                Email = "",
                AccountId = account.Id
            };

            SelectGenderList = ValueList.SelectGenderList;
            SelectNationList = ValueList.SelectNationList;

            return Page();
        }

        [BindProperty]
        public AccountInfo AccountInfo { get; set; } = default!;

        public List<SelectListItem> SelectGenderList { get; set; } = default!;

        public List<SelectListItem> SelectNationList { get; set; } = default!;

        // For more information, see https://aka.ms/RazorPagesCRUD.
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.AccountInfo.Add(AccountInfo);
            await _context.SaveChangesAsync();

            return RedirectToPage("/AccountManager/Index");
        }
    }
}