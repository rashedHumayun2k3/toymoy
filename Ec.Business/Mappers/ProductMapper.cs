using AutoMapper;
using Ec.Business.Dto.Response;
using Ec.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Business.Mappers
{
	public class ProductMapper : Profile
	{
		public ProductMapper() 
		{
			CreateMap<Product, ProductDto>()
			 .ForMember(dest => dest.ProductName, opt => opt.MapFrom(src => src.Name))
			 .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Description))
			 .ReverseMap();
		}
	}
}
