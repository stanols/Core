using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Core.DAL.Entities
{
	public class Adventure : BaseEntity
	{
		public string Name { get; set; }
		public string Description { get; set; }
		public DateTime StartsOn { get; set; }
		public DateTime EndsOn { get; set; }

		[ForeignKey("CreatedBy")]
		public int CreatedById { get; set; }
		public User CreatedBy { get; set; }

		public ICollection<Experience> Experiences { get; set; }
		public ICollection<AdventureUser> AdventureUsers { get; set; }
	}
}
