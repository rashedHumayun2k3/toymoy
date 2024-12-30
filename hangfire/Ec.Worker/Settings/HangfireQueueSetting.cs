using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Worker.Settings
{
	public class HangfireQueueSetting
	{
		public string QueueName { get; set; } = string.Empty;

		public int WorkerCount { get; set; }
	}
}
