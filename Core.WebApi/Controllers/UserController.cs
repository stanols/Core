﻿using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Authentication;
using System.Security.Claims;
using System.Text;
using Core.BLL.Interfaces;
using Core.BLL.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;

namespace Core.WebAPI.Controllers
{
	[Authorize]
	public class UserController : BaseController
	{
		private readonly IUserService _userService;
		private readonly IConfiguration _config;

		public UserController(IUserService userService, IConfiguration config)
		{
			_userService = userService;
			_config = config;
		}

		[HttpPost]
		[AllowAnonymous]
		public void Create([FromBody]UserViewModel userViewModel)
		{
			_userService.Create(userViewModel);
		}

		[HttpGet]
		public UserViewModel Get([FromQuery]int id)
		{
			return _userService.Get(id);
		}

		[HttpPut]
		public void Update([FromBody]UserViewModel user)
		{
			_userService.Update(user);
		}

		[HttpDelete]
		public void Remove([FromQuery]int id)
		{
			_userService.Remove(id);
		}

		[HttpPost]
		[AllowAnonymous]
		public UserViewModel Authenticate([FromBody] UserViewModel userViewModel)
		{
			const string secret = "secret";

			var viewModel = _userService.Authenticate(userViewModel.Name, userViewModel.Password);
			if (viewModel == null)
			{
				throw new AuthenticationException();
			}

			var tokenHandler = new JwtSecurityTokenHandler();
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

			var token = tokenHandler.CreateToken(tokenDescriptor);
			viewModel.Token = tokenHandler.WriteToken(token);

			return viewModel;
		}

	}
}
