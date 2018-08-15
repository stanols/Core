using System;
using Core.BLL.Interfaces;
using Core.BLL.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace Core.WebAPI.Controllers
{
    public class UserController : BaseController
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public UserViewModel Create([FromBody]UserViewModel userViewModel)
        {
            return _userService.Create(userViewModel);
        }

        [HttpGet]
        public UserViewModel Get([FromQuery]int id)
        {
            return new UserViewModel
            {
                Id = 1,
                Name = "Pasha"
            };
        }

        [HttpPut]
        public void Update([FromBody]UserViewModel user)
        {

        }

        [HttpDelete]
        public void Delete([FromQuery]int id)
        {

        }
    }
}
