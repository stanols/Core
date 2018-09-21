using System;
using Core.DAL.Entities;
using Core.DAL.Interfaces;

namespace Core.BLL.Services
{
    public class RoleService : BaseService<Role>
    {
	    public RoleService(IRoleRepository roleRepository)
			:base(roleRepository)
        {
            
        }
    }
}
