using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;

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
