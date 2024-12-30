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
    public class CategoryMapper: Profile
    {
        public CategoryMapper() 
        { 
            CreateMap<Categories, CategoryDto>()
             .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
             .ReverseMap();
        }
    }
}
