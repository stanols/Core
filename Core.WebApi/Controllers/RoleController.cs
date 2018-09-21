using System;
using Microsoft.AspNetCore.Authorization;

namespace Core.WebAPI.Controllers
{
	[Authorize]
    public class RoleController : BaseController
    {
        public RoleController()
        {

        }
    }
}
