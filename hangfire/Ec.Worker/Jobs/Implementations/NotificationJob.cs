using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Worker.Jobs.Implementations
{
	public class NotificationJob : INotificationJob
	{
		readonly ILogger<NotificationJob> _logger;
		public NotificationJob(ILogger<NotificationJob> logger)
        {
            _logger = logger;
        }
        public async Task SendWelcomeEmail(string emailAddress)
		{
			_logger.LogInformation("SendWelcomeEmail for {emailAddress}", emailAddress);
		}
	}
}
