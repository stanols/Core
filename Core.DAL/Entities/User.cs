using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Core.DAL.Entities
{
    public class User : BaseEntity
	{
        [StringLength(450)]
        public string Name { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
	    public byte[] PasswordHash { get; set; }
	    public byte[] PasswordSalt { get; set; }
    }
}
