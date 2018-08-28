using Microsoft.AspNetCore.Identity;
using Core.DAL.Entities;

namespace Core.BLL.Services
{
    public class RoleService
    {
        private readonly RoleManager<Role> _roleManager;

        public RoleService(RoleManager<Role> roleManager)
        {
            _roleManager = roleManager;
        }
    }
}
