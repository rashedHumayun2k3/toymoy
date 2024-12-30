using AutoMapper;
using Ec.Business.Dto.Response;
using Ec.Data.Entities;
using Ec.Data.Repositories;
using Ec.Data.Repositories.Implementations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Business.Managers.Implementations
{
    public class CategoryManager: ICategoryManager
    {
        readonly ICategoryRepository _categoryRepository;
        readonly IMapper _mapper;
        public CategoryManager(ICategoryRepository categoryRepository, IMapper mapper) 
        { 
            _categoryRepository = categoryRepository;
            _mapper = mapper;
        }

        public async Task<List<CategoryNode>> GetAllCategories()
        {
            var result = _mapper.Map<List<Categories>>(await _categoryRepository.GetAllCategories());
            return TransformToHierarchy(result);
         
        }

        public List<CategoryNode> TransformToHierarchy(List<Categories> flatCategories)
        {
            var categoryMap = new Dictionary<int, CategoryNode>();
            var rootCategories = new List<CategoryNode>();
            foreach (var flatCategory in flatCategories)
            {
                var categoryNode = new CategoryNode
                {
                    Id = flatCategory.Id,
                    Name = flatCategory.Name,
                    Children = new List<CategoryNode>()
                };
                categoryMap.Add(flatCategory.Id, categoryNode);
                if (flatCategory.ParentId == 0)
                {
                    rootCategories.Add(categoryNode);
                }
                else if (categoryMap.ContainsKey(flatCategory.ParentId))
                {
                    categoryMap[flatCategory.ParentId].Children.Add(categoryNode);
                  
                }
            }
            return rootCategories;
        }

     





        }
}
