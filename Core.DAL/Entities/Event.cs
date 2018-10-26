using System;

namespace Core.DAL.Entities
{
	public class Event : BaseEntity
	{
		public string Name { get; set; }
		public string Description { get; set; }
		public int AdventureId { get; set; }
		public int LocationId { get; set; }
		public DateTime StartsOn { get; set; }
		public DateTime EndsOn { get; set; }
	}
}
