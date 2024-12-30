using Ec.Worker.Jobs;
using Ec.Worker.Jobs.Implementations;
using Ec.Worker.Settings;
using Hangfire;
using Hangfire.SqlServer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
namespace Ec.Worker
{
	public static class Startup
	{
		public static IServiceCollection ConfigureHangfireJobs(this IServiceCollection services)
		{
			services.AddScoped<INotificationJob, NotificationJob>();
			return services;
		}
		public static IServiceCollection AddMxHangfire(this IServiceCollection services, IConfiguration configuration)
		{
			services.AddHangfire((services, config) =>
			{
				var appConfig = services.GetRequiredService<IConfiguration>();
				var connection = appConfig.GetConnectionString("EcHangfireConnection");

			//config.SetDataCompatibilityLevel(CompatibilityLevel.Version_170)
			//.UseSimpleAssemblyNameTypeSerializer()
			//.UseRecommendedSerializerSettings()
			//.UseSqlServerStorage("Server=-; Database=-; user=-; password=-;");

				//config
				//	.SetDataCompatibilityLevel(CompatibilityLevel.Version_170)
				//	.UseSimpleAssemblyNameTypeSerializer()
				//	.UseRecommendedSerializerSettings()
				//	.UseSqlServerStorage(connection,
				//	new SqlServerStorageOptions
				//	{
				//		InvisibilityTimeout = TimeSpan.FromMinutes(2)
				//	});
				//config.UseSqlServerStorage(connection);

				config.UseSqlServerStorage(
		() => new SqlConnection(connection));

				JobStorage.Current = new SqlServerStorage(connection);

				//services.AddHangfireServer();

			});
			return services;
		}
	}
}
