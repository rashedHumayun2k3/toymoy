using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Business.Dto.Response
{
    public class CategoryDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int ParentId { get; set; }
    }

    public class CategoryNode
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<CategoryNode> Children { get; set; }
    }

}
