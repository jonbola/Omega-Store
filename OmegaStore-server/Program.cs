using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using OmegaStore_server.Data;
using OmegaStore_server.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddDbContext<OmegaStoreContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("OmegaStoreContext") ??
    throw new InvalidOperationException("Connection string 'OmegaStoreContext' not found.")));

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    await SeedData.Initialize(services);
}

app.UseStaticFiles(new StaticFileOptions()
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(builder.Environment.ContentRootPath, "Assets/Images")),
    RequestPath = new PathString("/Images")
});

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseAuthorization();
app.MapStaticAssets();
app.MapRazorPages().WithStaticAssets();

app.Run();