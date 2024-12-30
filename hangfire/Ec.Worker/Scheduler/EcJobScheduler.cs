using Ec.Worker.Jobs;
using Ec.Worker.Jobs.Implementations;
using Hangfire;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Worker.Scheduler
{
	public class EcJobScheduler
	{
		readonly IBackgroundJobClient _backgroundJobClient;
		public EcJobScheduler(IBackgroundJobClient backgroundJobClient)
		{
			_backgroundJobClient = backgroundJobClient;
		}
		public static void ScheduleRecurringJobs()
		{
			RecurringJob.RemoveIfExists(nameof(INotificationJob));
			RecurringJob.AddOrUpdate<INotificationJob>(nameof (NotificationJob), job => job.SendWelcomeEmail("Maruf schedule"), MinuteInterval(1));
			//RecurringJob.AddOrUpdate<INotificationJob>(nameof(NotificationJob), job => job.SendWelcomeEmail("Maruf schedule"), MinuteInterval(1), TimeZoneInfo.Utc);
		}
		static string HourInterval(int interval)
			=> $"0 */{interval} * * *";

		static string MinuteInterval(int interval)
			=> $"*/{interval} * * * *";
	}
}
