using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Core.DAL.Entities
{
	public class Experience : BaseEntity
	{
		public string Name { get; set; }
		public string Description { get; set; }

		public DateTime StartsOn { get; set; }
		public DateTime EndsOn { get; set; }

		[ForeignKey("Location")]
		public int LocationId { get; set; }
		public Location Location { get; set; }
		[ForeignKey("Adventure")]
		public int AdventureId { get; set; }
		public Adventure Adventure { get; set; }
	}
}
