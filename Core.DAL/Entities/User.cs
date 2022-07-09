using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Core.DAL.Entities
{
	public class User : BaseEntity
	{
		[StringLength(450)]
		public string Name { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string Email { get; set; }
		public byte[] PasswordSalt { get; set; }
		public byte[] PasswordHash { get; set; }

		public ICollection<AdventureUser> AdventureUsers { get; set; }
		public ICollection<Adventure> Adventures { get; set; }
	}
}
