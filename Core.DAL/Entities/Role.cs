using System;
using Microsoft.AspNetCore.Identity;

namespace Core.DAL.Entities
{
    public class Role : BaseEntity
	{
	    public string Name { get; set; }
	    public string Description { get; set; }
    }
}
