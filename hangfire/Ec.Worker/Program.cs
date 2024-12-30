using Ec.Worker;
using Ec.Worker.Scheduler;
using Ec.Worker.Settings;
using Hangfire;
using Hangfire.SqlServer;
using Serilog;

//IHost host = Host.CreateDefaultBuilder(args)
//	.ConfigureServices(services =>
//	{
//		services.AddHostedService<Worker>();
//	})
//	.Build();

//await host.RunAsync();

public class Program
{
	public static void Main(string[] args)
	{
		var app = CreateHostBuilder(args).Build();
		EcJobScheduler.ScheduleRecurringJobs();
		app.Run();
	}
	public static IHostBuilder CreateHostBuilder(string[] args)
	{
		return Host.CreateDefaultBuilder(args)
				//.UseSystemd()
				.ConfigureServices((hostContext, services) =>
				{
					services.ConfigureHangfireJobs();
					//services.ConfigureServices(hostContext.Configuration);
					services.AddMxHangfire(hostContext.Configuration);

					var connection = hostContext.Configuration.GetConnectionString("EcHangfireConnection");

					JobStorage.Current = new SqlServerStorage(connection);

					//var queueSettings = hostContext.Configuration.GetSection("Hangfire").Get<List<HangfireQueueSetting>>();
					services.AddHangfireServer();
					//foreach (var setting in queueSettings)
					//{
					//	services.AddHangfireServer(options =>
					//	{
					//		options.ServerName = $"{Environment.MachineName}:{setting.QueueName}";
					//		options.Queues = new[] { setting.QueueName };
					//		options.WorkerCount = setting.WorkerCount;
					//	});
					//}
				})
				.ConfigureLogging((context, config) =>
				{
					var logger = new LoggerConfiguration()
						.ReadFrom.Configuration(context.Configuration)
						.Enrich.FromLogContext()
						.CreateLogger();

					config.ClearProviders();
					config.AddConsole();
					config.AddSerilog(logger);
				});
	}
}
