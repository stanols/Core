using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace Core.DAL.Entities
{
    public class User : BaseEntity
	{
	    public string Name { get; set; }
	    public byte[] PasswordHash { get; set; }
	    public byte[] PasswordSalt { get; set; }
		public Role Role { get; set; }
    }
}
