using Ec.Api.CustomMiddlewares;
using Ec.Business;
using Ec.Data.Context;
using Serilog;
using Ec.Worker;
using Hangfire;

var builder = WebApplication.CreateBuilder(args);

var logger = new LoggerConfiguration()
	.ReadFrom.Configuration(builder.Configuration)
	.Enrich.FromLogContext()
	.CreateLogger();

builder.WebHost.ConfigureLogging(logging =>
{
	logging.ClearProviders();
	logging.AddConsole();
	logging.AddSerilog(logger);
});
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddEcBusiness(builder.Configuration);
builder.Services.AddMxHangfire(builder.Configuration);
builder.Services.ConfigureHangfireJobs();
//builder.Services.Configure<ConnectionStringOptions>(builder.Configuration.GetSection(ConnectionStringOptions.Position));
//builder.Services.AddHttpContextAccessor();
builder.Services.AddCors(options =>
    {
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins("http://localhost:3001") // Replace with your Next.js app's domain
                    .AllowAnyMethod()
                    .AllowAnyHeader();
    });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}

app.UseMiddleware<ExceptionHandlingMiddleware>();
app.UseHangfireDashboard();
app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors();
app.MapControllers();

app.Run();
