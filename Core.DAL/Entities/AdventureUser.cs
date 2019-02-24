using System.ComponentModel.DataAnnotations.Schema;

namespace Core.DAL.Entities
{
	public class AdventureUser : BaseEntity
	{
		[ForeignKey("Adventure")]
		public int AdventureId { get; set; }
		[ForeignKey("User")]
		public int UserId { get; set; }

		public Adventure Adventure { get; set; }
		public User User { get; set; }
	}
}
