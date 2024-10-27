using REACT_MusicScale.Interfaces;
using REACT_MusicScale.Services;

var builder = WebApplication.CreateBuilder(args);

// Set Kestrel server to listen on port 80
builder.WebHost.ConfigureKestrel(serverOptions =>
{
    serverOptions.ListenAnyIP(80); // Change to 80 for Render
});


// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddSingleton<IScaleMakerService, UpdatedScaleMakerService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// app.UseHttpsRedirection();

app.UseStaticFiles();
app.MapFallbackToFile("index.html"); // For single-page applications


app.UseAuthorization();

app.MapControllers();

app.Run();

