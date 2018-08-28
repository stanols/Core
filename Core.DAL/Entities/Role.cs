using System;
using Microsoft.AspNetCore.Identity;

namespace Core.DAL.Entities
{
    public class Role : IdentityRole<int>
    {
        public string Description { get; set; }
    }
}
