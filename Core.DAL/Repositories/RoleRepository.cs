using System;
using Core.DAL.Entities;
using Core.DAL.Interfaces;

namespace Core.DAL.Repositories
{
    public class RoleRepository : BaseRepository<Role>, IRoleRepository
    {
	    public RoleRepository(CoreDbContext context)
			:base(context)
	    {
	    }
    }
}
