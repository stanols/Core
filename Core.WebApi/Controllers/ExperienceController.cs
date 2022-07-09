using System.Collections.Generic;
using System.Linq;
using Core.BLL.Interfaces;
using Core.BLL.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Core.WebApi.Controllers
{
	[Authorize]
	public class ExperienceController : BaseController
	{
		private readonly IExperienceService _experienceService;

		public ExperienceController(IExperienceService experienceService)
		{
			_experienceService = experienceService;
		}

		[HttpGet]
		public List<ExperienceInfoViewModel> GetAll()
		{
			var experiences = _experienceService.GetAll()
				.Select(x => 
					new ExperienceInfoViewModel
					{
						Id = x.Id,
						Name = x.Name
					})
				.ToList();
			return experiences;
		}
	}
}
