using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Data.Entities
{
	public class Product : BaseEntity
	{
        [BsonId]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<Attribute> Attributes { get; set; }
    }
    public class Attribute
    {
        public string AttributeName { get; set; }
		public string AttributeValue { get; set; }
	}
}
