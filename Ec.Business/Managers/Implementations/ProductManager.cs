using AutoMapper;
using Ec.Business.Dto.Response;
using Ec.Data.Entities;
using Ec.Data.Repositories;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Business.Managers.Implementations
{
	public class ProductManager : IProductManager
	{
		private readonly IProductRepository _productRepository;
		private readonly IMapper _mapper;
		private readonly ILogger<ProductManager> _logger;

		public ProductManager(IProductRepository productRepository, IMapper mapper, ILogger<ProductManager> logger)
        {
			_productRepository = productRepository;
			_mapper = mapper;
			_logger = logger;
		}

		public async Task<ProductDto> GetProductById(int id)
		{
			//throw new ArgumentNullException("UserId can not be null");
			_logger.LogInformation("GetProductById ({id})",id);
			// hellos
			var result = _mapper.Map<ProductDto>(await _productRepository.GetProductById(id));
			return result;
		}
		public async Task<ProductDto> InsertProduct(ProductDto productDto)
		{
			
			productDto.Id = Guid.NewGuid();
			int rowsEffected = await _productRepository.CreateProductAsync(_mapper.Map<Product>(productDto));
			if (rowsEffected == 0)
			{
				_logger.LogInformation("Product insertion failed!");
				productDto.Id = Guid.Empty;
				return productDto;
			}
			else
			{
				await _productRepository.SaveProductToNosqlAsync(_mapper.Map<Product>(productDto));
				return productDto;
			}
			
			
		}
	}
}
