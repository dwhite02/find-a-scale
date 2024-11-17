using REACT_MusicScale.Interfaces;
using REACT_MusicScale.Services;

var builder = WebApplication.CreateBuilder(args);

// Check if the environment is production
if (builder.Environment.IsProduction())
{
    // Set Kestrel to listen on the port defined by the PORT environment variable
    var port = Environment.GetEnvironmentVariable("PORT") ?? "8080"; // Fallback to 8080 if PORT is not set
    builder.WebHost.ConfigureKestrel(serverOptions =>
    {
        serverOptions.ListenAnyIP(int.Parse(port)); // Bind to the port
    });
}

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

app.UseHttpsRedirection();

app.UseStaticFiles();
app.MapFallbackToFile("index.html"); // For single-page applications


app.UseAuthorization();

app.MapControllers();

app.Run();

