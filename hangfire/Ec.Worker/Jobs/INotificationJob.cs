using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Worker.Jobs
{
	public interface INotificationJob
	{
		Task SendWelcomeEmail(string emailAddress);
	}
}
