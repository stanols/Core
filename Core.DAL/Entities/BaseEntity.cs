using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Core.DAL.Entities
{
	public class BaseEntity
	{
		[Key]
		[Column("Id", Order = 1, TypeName = "int")]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }
	}
}
