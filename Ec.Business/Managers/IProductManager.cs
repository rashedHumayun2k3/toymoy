using Ec.Business.Dto.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Business.Managers
{
	public interface IProductManager
	{
		Task<ProductDto> GetProductById(int id);
		Task<ProductDto> InsertProduct(ProductDto product);
	}
}
