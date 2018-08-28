using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace Core.DAL.Entities
{
    public class User : IdentityUser<int>
    {
        public string Name { get; set; }
        public Role Role { get; set; }
    }
}
