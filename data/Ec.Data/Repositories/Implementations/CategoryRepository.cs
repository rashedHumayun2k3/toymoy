using Ec.Data.Context;
using Ec.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace Ec.Data.Repositories.Implementations
{
	public class CategoryRepository : ICategoryRepository
	{
		private readonly EcDbContext _context;
		public CategoryRepository(EcDbContext context)
		{
			_context = context;
		}

        public async Task<IEnumerable<Categories>> GetAllCategories()
        {
           
			var query = "SELECT Id,Name,ParentId FROM [dbo].[Categories] where IsActive=1";
			using
			var con = _context.CreateConnection();
			var categories = await con.QueryAsync<Categories>(query);
			return categories.ToList();
			throw new NotImplementedException();

		}

	}
}
