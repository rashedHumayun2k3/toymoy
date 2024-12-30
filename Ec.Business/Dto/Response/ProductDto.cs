﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Business.Dto.Response
{
	public class ProductDto
	{
		public Guid? Id { get; set; }
		public string ProductName { get; set; } = string.Empty;
		public string Description { get; set; } = string.Empty;
	}
}
