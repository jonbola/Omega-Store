using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using OmegaStore_server.Data;

public static class ValueList
{
    public static List<SelectListItem> SelectGenderList { get; set; } = new List<SelectListItem>
    {
        new SelectListItem { Text= "-", Value= "-" },
        new SelectListItem { Text= "Male", Value= "m" },
        new SelectListItem { Text= "Female", Value= "f" },
        new SelectListItem { Text= "Other", Value= "o" }
    };

    public static List<SelectListItem> SelectNationList { get; set; } = new List<SelectListItem>
    {
        new SelectListItem { Text= "-", Value= "-" },
        new SelectListItem { Text= "Afghanistan", Value= "afghanistan" },
        new SelectListItem { Text= "Albania", Value= "albania" },
        new SelectListItem { Text= "Algeria", Value= "algeria" },
        new SelectListItem { Text= "Andorra", Value= "andorra" },
        new SelectListItem { Text= "Angola", Value= "angola" },
        new SelectListItem { Text= "Antigua and Barbuda", Value= "antigua-and-barbuda" },
        new SelectListItem { Text= "Argentina", Value= "argentina" },
        new SelectListItem { Text= "Armenia", Value= "armenia" },
        new SelectListItem { Text= "Australia", Value= "australia" },
        new SelectListItem { Text= "Austria", Value= "austria" },
        new SelectListItem { Text= "Azerbaijan", Value= "azerbaijan" },
        new SelectListItem { Text= "Bahamas", Value= "bahamas" },
        new SelectListItem { Text= "Bahrain", Value= "bahrain" },
        new SelectListItem { Text= "Bangladesh", Value= "bangladesh" },
        new SelectListItem { Text= "Barbados", Value= "barbados" },
        new SelectListItem { Text= "Belarus", Value= "belarus" },
        new SelectListItem { Text= "Belgium", Value= "belgium" },
        new SelectListItem { Text= "Belize", Value= "belize" },
        new SelectListItem { Text= "Benin", Value= "benin" },
        new SelectListItem { Text= "Bhutan", Value= "bhutan" },
        new SelectListItem { Text= "Bolivia", Value= "bolivia" },
        new SelectListItem { Text= "Bosnia and Herzegovina", Value= "bosnia-and-herzegovina" },
        new SelectListItem { Text= "Botswana", Value= "botswana" },
        new SelectListItem { Text= "Brazil", Value= "brazil" },
        new SelectListItem { Text= "Brunei", Value= "brunei" },
        new SelectListItem { Text= "Bulgaria", Value= "bulgaria" },
        new SelectListItem { Text= "Burkina Faso", Value= "burkina-faso" },
        new SelectListItem { Text= "Burundi", Value= "burundi" },
        new SelectListItem { Text= "Cabo Verde", Value= "cabo-verde" },
        new SelectListItem { Text= "Cambodia", Value= "cambodia" },
        new SelectListItem { Text= "Cameroon", Value= "cameroon" },
        new SelectListItem { Text= "Canada", Value= "canada" },
        new SelectListItem { Text= "Central African Republic", Value= "central-african-republic" },
        new SelectListItem { Text= "Chad", Value= "chad" },
        new SelectListItem { Text= "Chile", Value= "chile" },
        new SelectListItem { Text= "China", Value= "china" },
        new SelectListItem { Text= "Colombia", Value= "colombia" },
        new SelectListItem { Text= "Comoros", Value= "comoros" },
        new SelectListItem { Text= "Democratic Republic of the Congo", Value= "democratic-republic-of-the-congo" },
        new SelectListItem { Text= "Republic of the Congo", Value= "republic-of-the-congo" },
        new SelectListItem { Text= "Costa Rica", Value= "costa-rica" },
        new SelectListItem { Text= "Côte d’Ivoire", Value= "côte-d’ivoire" },
        new SelectListItem { Text= "Croatia", Value= "croatia" },
        new SelectListItem { Text= "Cuba", Value= "cuba" },
        new SelectListItem { Text= "Cyprus", Value= "cyprus" },
        new SelectListItem { Text= "Czech Republic", Value= "czech-republic" },
        new SelectListItem { Text= "Denmark", Value= "denmark" },
        new SelectListItem { Text= "Djibouti", Value= "djibouti" },
        new SelectListItem { Text= "Dominica", Value= "dominica" },
        new SelectListItem { Text= "Dominican Republic", Value= "dominican-republic" },
        new SelectListItem { Text= "East Timor", Value= "east-timor" },
        new SelectListItem { Text= "Ecuador", Value= "ecuador" },
        new SelectListItem { Text= "Egypt", Value= "egypt" },
        new SelectListItem { Text= "El Salvador", Value= "el-salvador" },
        new SelectListItem { Text= "Equatorial Guinea", Value= "equatorial-guinea" },
        new SelectListItem { Text= "Eritrea", Value= "eritrea" },
        new SelectListItem { Text= "Estonia", Value= "estonia" },
        new SelectListItem { Text= "Eswatini", Value= "eswatini" },
        new SelectListItem { Text= "Ethiopia", Value= "ethiopia" },
        new SelectListItem { Text= "Fiji", Value= "fiji" },
        new SelectListItem { Text= "Finland", Value= "finland" },
        new SelectListItem { Text= "France", Value= "france" },
        new SelectListItem { Text= "Gabon", Value= "gabon" },
        new SelectListItem { Text= "The Gambia", Value= "the-gambia" },
        new SelectListItem { Text= "Georgia", Value= "georgia" },
        new SelectListItem { Text= "Germany", Value= "germany" },
        new SelectListItem { Text= "Ghana", Value= "ghana" },
        new SelectListItem { Text= "Greece", Value= "greece" },
        new SelectListItem { Text= "Grenada", Value= "grenada" },
        new SelectListItem { Text= "Guatemala", Value= "guatemala" },
        new SelectListItem { Text= "Guinea", Value= "guinea" },
        new SelectListItem { Text= "Guinea-Bissau", Value= "guinea-bissau" },
        new SelectListItem { Text= "Guyana", Value= "guyana" },
        new SelectListItem { Text= "Haiti", Value= "haiti" },
        new SelectListItem { Text= "Honduras", Value= "honduras" },
        new SelectListItem { Text= "Hungary", Value= "hungary" },
        new SelectListItem { Text= "Iceland", Value= "iceland" },
        new SelectListItem { Text= "India", Value= "india" },
        new SelectListItem { Text= "Indonesia", Value= "indonesia" },
        new SelectListItem { Text= "Iran", Value= "iran" },
        new SelectListItem { Text= "Iraq", Value= "iraq" },
        new SelectListItem { Text= "Ireland", Value= "ireland" },
        new SelectListItem { Text= "Israel", Value= "israel" },
        new SelectListItem { Text= "Italy", Value= "italy" },
        new SelectListItem { Text= "Jamaica", Value= "jamaica" },
        new SelectListItem { Text= "Japan", Value= "japan" },
        new SelectListItem { Text= "Jordan", Value= "jordan" },
        new SelectListItem { Text= "Kazakhstan", Value= "kazakhstan" },
        new SelectListItem { Text= "Kenya", Value= "kenya" },
        new SelectListItem { Text= "Kiribati", Value= "kiribati" },
        new SelectListItem { Text= "North Korea", Value= "north-korea" },
        new SelectListItem { Text= "South Korea", Value= "south-korea" },
        new SelectListItem { Text= "Kosovo", Value= "kosovo" },
        new SelectListItem { Text= "Kuwait", Value= "kuwait" },
        new SelectListItem { Text= "Kyrgyzstan", Value= "kyrgyzstan" },
        new SelectListItem { Text= "Laos", Value= "laos" },
        new SelectListItem { Text= "Latvia", Value= "latvia" },
        new SelectListItem { Text= "Lebanon", Value= "lebanon" },
        new SelectListItem { Text= "Lesotho", Value= "lesotho" },
        new SelectListItem { Text= "Liberia", Value= "liberia" },
        new SelectListItem { Text= "Libya", Value= "libya" },
        new SelectListItem { Text= "Liechtenstein", Value= "liechtenstein" },
        new SelectListItem { Text= "Lithuania", Value= "lithuania" },
        new SelectListItem { Text= "Luxembourg", Value= "luxembourg" },
        new SelectListItem { Text= "Madagascar", Value= "madagascar" },
        new SelectListItem { Text= "Malawi", Value= "malawi" },
        new SelectListItem { Text= "Malaysia", Value= "malaysia" },
        new SelectListItem { Text= "Maldives", Value= "maldives" },
        new SelectListItem { Text= "Mali", Value= "mali" },
        new SelectListItem { Text= "Malta", Value= "malta" },
        new SelectListItem { Text= "Marshall Islands", Value= "marshall-islands" },
        new SelectListItem { Text= "Mauritania", Value= "mauritania" },
        new SelectListItem { Text= "Mauritius", Value= "mauritius" },
        new SelectListItem { Text= "Mexico", Value= "mexico" },
        new SelectListItem { Text= "Federated States of Micronesia", Value= "federated-states-of-micronesia" },
        new SelectListItem { Text= "Moldova", Value= "moldova" },
        new SelectListItem { Text= "Monaco", Value= "monaco" },
        new SelectListItem { Text= "Mongolia", Value= "mongolia" },
        new SelectListItem { Text= "Montenegro", Value= "montenegro" },
        new SelectListItem { Text= "Morocco", Value= "morocco" },
        new SelectListItem { Text= "Mozambique", Value= "mozambique" },
        new SelectListItem { Text= "Myanmar", Value= "myanmar" },
        new SelectListItem { Text= "Namibia", Value= "namibia" },
        new SelectListItem { Text= "Nauru", Value= "nauru" },
        new SelectListItem { Text= "Nepal", Value= "nepal" },
        new SelectListItem { Text= "Netherlands", Value= "netherlands" },
        new SelectListItem { Text= "New Zealand", Value= "new-zealand" },
        new SelectListItem { Text= "Nicaragua", Value= "nicaragua" },
        new SelectListItem { Text= "Niger", Value= "niger" },
        new SelectListItem { Text= "Nigeria", Value= "nigeria" },
        new SelectListItem { Text= "North Macedonia", Value= "north-macedonia" },
        new SelectListItem { Text= "Norway", Value= "norway" },
        new SelectListItem { Text= "Oman", Value= "oman" },
        new SelectListItem { Text= "Pakistan", Value= "pakistan" },
        new SelectListItem { Text= "Palau", Value= "palau" },
        new SelectListItem { Text= "Panama", Value= "panama" },
        new SelectListItem { Text= "Papua New Guinea", Value= "papua-new-guinea" },
        new SelectListItem { Text= "Paraguay", Value= "paraguay" },
        new SelectListItem { Text= "Peru", Value= "peru" },
        new SelectListItem { Text= "Philippines", Value= "philippines" },
        new SelectListItem { Text= "Poland", Value= "poland" },
        new SelectListItem { Text= "Portugal", Value= "portugal" },
        new SelectListItem { Text= "Qatar", Value= "qatar" },
        new SelectListItem { Text= "Romania", Value= "romania" },
        new SelectListItem { Text= "Russia", Value= "russia" },
        new SelectListItem { Text= "Rwanda", Value= "rwanda" },
        new SelectListItem { Text= "Saint Kitts and Nevis", Value= "saint-kitts-and-nevis" },
        new SelectListItem { Text= "Saint Lucia", Value= "saint-lucia" },
        new SelectListItem { Text= "Saint Vincent and the Grenadines", Value= "saint-vincent-and-the-grenadines" },
        new SelectListItem { Text= "Samoa", Value= "samoa" },
        new SelectListItem { Text= "San Marino", Value= "san-marino" },
        new SelectListItem { Text= "Sao Tome and Principe", Value= "sao-tome-and-principe" },
        new SelectListItem { Text= "Saudi Arabia", Value= "saudi-arabia" },
        new SelectListItem { Text= "Senegal", Value= "senegal" },
        new SelectListItem { Text= "Serbia", Value= "serbia" },
        new SelectListItem { Text= "Seychelles", Value= "seychelles" },
        new SelectListItem { Text= "Sierra Leone", Value= "sierra-leone" },
        new SelectListItem { Text= "Singapore", Value= "singapore" },
        new SelectListItem { Text= "Slovakia", Value= "slovakia" },
        new SelectListItem { Text= "Slovenia", Value= "slovenia" },
        new SelectListItem { Text= "Solomon Islands", Value= "solomon-islands" },
        new SelectListItem { Text= "Somalia", Value= "somalia" },
        new SelectListItem { Text= "South Africa", Value= "south-africa" },
        new SelectListItem { Text= "Spain", Value= "spain" },
        new SelectListItem { Text= "Sri Lanka", Value= "sri-lanka" },
        new SelectListItem { Text= "Sudan", Value= "sudan" },
        new SelectListItem { Text= "South Sudan", Value= "south-sudan" },
        new SelectListItem { Text= "Suriname", Value= "suriname" },
        new SelectListItem { Text= "Sweden", Value= "sweden" },
        new SelectListItem { Text= "Switzerland", Value= "switzerland" },
        new SelectListItem { Text= "Syria", Value= "syria" },
        new SelectListItem { Text= "Taiwan", Value= "taiwan" },
        new SelectListItem { Text= "Tajikistan", Value= "tajikistan" },
        new SelectListItem { Text= "Tanzania", Value= "tanzania" },
        new SelectListItem { Text= "Thailand", Value= "thailand" },
        new SelectListItem { Text= "Togo", Value= "togo" },
        new SelectListItem { Text= "Tonga", Value= "tonga" },
        new SelectListItem { Text= "Trinidad and Tobago", Value= "trinidad-and-tobago" },
        new SelectListItem { Text= "Tunisia", Value= "tunisia" },
        new SelectListItem { Text= "Turkey", Value= "turkey" },
        new SelectListItem { Text= "Turkmenistan", Value= "turkmenistan" },
        new SelectListItem { Text= "Tuvalu", Value= "tuvalu" },
        new SelectListItem { Text= "Uganda", Value= "uganda" },
        new SelectListItem { Text= "Ukraine", Value= "ukraine" },
        new SelectListItem { Text= "United Arab Emirates", Value= "united-arab-emirates" },
        new SelectListItem { Text= "United Kingdom", Value= "united-kingdom" },
        new SelectListItem { Text= "United States", Value= "united-states" },
        new SelectListItem { Text= "Uruguay", Value= "uruguay" },
        new SelectListItem { Text= "Uzbekistan", Value= "uzbekistan" },
        new SelectListItem { Text= "Vanuatu", Value= "vanuatu" },
        new SelectListItem { Text= "Vatican City", Value= "vatican-city" },
        new SelectListItem { Text= "Venezuela", Value= "venezuela" },
        new SelectListItem { Text= "Vietnam", Value= "vietnam" },
        new SelectListItem { Text= "Yemen", Value= "yemen" },
        new SelectListItem { Text= "Zambia", Value= "zambia" },
        new SelectListItem { Text= "Zimbabwe", Value= "zimbabwe" }
    };

    public static async Task<List<SelectListItem>> SelectAccountList(OmegaStoreContext context)
    {
        try
        {
            return await context.Account.Select(a => new SelectListItem { Text = a.AccountName, Value = a.Id.ToString() }).ToListAsync();
        }

        catch
        {
            return new List<SelectListItem> { };
        }
    }

    public static async Task<List<SelectListItem>> SelectAccountInfoList(OmegaStoreContext context)
    {
        try
        {
            return await context.AccountInfo.Select(i => new SelectListItem { Text = String.Concat(i.FirstName, " ", i.LastName), Value = i.Id.ToString() }).ToListAsync();
        }

        catch
        {
            return new List<SelectListItem> { };
        }
    }

    public static async Task<List<SelectListItem>> SelectProductList(OmegaStoreContext context)
    {
        try
        {
            return await context.Product.Select(p => new SelectListItem { Text = p.Name, Value = p.Id.ToString() }).ToListAsync();
        }

        catch
        {
            return new List<SelectListItem> { };
        }
    }

    public static async Task<List<SelectListItem>> SelectCategoryList(OmegaStoreContext context)
    {
        try
        {
            return await context.Category.Select(c => new SelectListItem { Text = c.Name, Value = c.Id.ToString() }).ToListAsync();
        }

        catch
        {
            return new List<SelectListItem> { };
        }
    }

    public static async Task<List<SelectListItem>> SelectManufacturerList(OmegaStoreContext context)
    {
        try
        {
            return await context.Manufacturer.Select(m => new SelectListItem { Text = m.Name, Value = m.Id.ToString() }).ToListAsync();
        }

        catch
        {
            return new List<SelectListItem> { };
        }
    }
}