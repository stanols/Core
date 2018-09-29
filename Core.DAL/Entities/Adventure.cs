using System;
using System.Collections.Generic;
using System.Text;

namespace Core.DAL.Entities
{
    public class Adventure : BaseEntity
	{
        public string Name { get; set; }
        public string Description { get; set; }
        public User CreatedBy { get; set; }
        public DateTime StartsOn { get; set; }
        public DateTime EndsOn { get; set; }
    }
}
