using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles(new StaticFileOptions
{
    ServeUnknownFileTypes = true,
});

app.MapGet("/", () => Results.Redirect("/index.html"));
app.MapGet("/random", ([FromQuery] int min, [FromQuery] int max) => Results.Ok(new Random().Next(min, max <= min ? 10_000 : max)));

app.Run();