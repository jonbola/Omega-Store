using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using OmegaStore_server.Data;
using OmegaStore_server.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorPages();
builder.Services.AddDbContext<OmegaStoreContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("OmegaStoreContext") ??
    throw new InvalidOperationException("Connection string 'OmegaStoreContext' not found.")));
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowConnection",
    policy => policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});

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

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors("AllowConnection");
app.UseAuthorization();
app.MapStaticAssets();
app.MapRazorPages().WithStaticAssets();

app.Run();