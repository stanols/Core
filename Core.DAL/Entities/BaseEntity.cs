using System.ComponentModel.DataAnnotations;

namespace Core.DAL.Entities
{
	public class BaseEntity
	{
		[Key]
		public int Id { get; set; }
	}
}
