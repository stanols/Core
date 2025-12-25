using System;
using System.Security.Authentication;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;
using Core.BLL.Interfaces;
using Core.BLL.ViewModels;

namespace Core.WebApi.Controllers
{
	public class UserController : BaseController
	{
		private readonly IUserService _userService;
		private readonly IConfiguration _config;
		private readonly JsonWebTokenHandler _tokenHandler;

		public UserController(IUserService userService, IConfiguration config)
		{
			_userService = userService;
			_config = config;
			_tokenHandler = new JsonWebTokenHandler();
		}

		[HttpPost]
		[AllowAnonymous]
		public void Create([FromBody]UserViewModel userViewModel)
		{
			_userService.Create(userViewModel);
		}

		[Authorize]
		[HttpGet]
		public UserViewModel Get([FromQuery]int id)
		{
			return _userService.Get(id);
		}

		[Authorize]
		[HttpPut]
		public void Update([FromBody]UserViewModel user)
		{
			_userService.Update(user);
		}

		[Authorize]
		[HttpDelete]
		public void Remove([FromQuery]int id)
		{
			_userService.Remove(id);
		}

		[HttpPost]
		[AllowAnonymous]
		public UserViewModel Login([FromBody]UserViewModel userViewModel)
		{
			const string secret = "secret";

			var viewModel = _userService.Authenticate(userViewModel.Name, userViewModel.Password);
			if (viewModel == null)
			{
				throw new AuthenticationException();
			}

			var key = Encoding.ASCII.GetBytes(_config[secret]);
			var tokenDescriptor = new SecurityTokenDescriptor
			{
				Subject = new ClaimsIdentity(new Claim[]
				{
					new Claim(ClaimTypes.Name, viewModel.Id.ToString())
				}),
				Expires = DateTime.UtcNow.AddDays(1),
				SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
			};

			var token = _tokenHandler.CreateToken(tokenDescriptor);
			viewModel.Token = token;

			return viewModel;
		}

		[HttpPost]
		[AllowAnonymous]
		public void Logout()
		{
			_tokenHandler.TokenLifetimeInMinutes = 1;
		}
	}
}
