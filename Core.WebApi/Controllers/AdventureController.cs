using Core.BLL.Interfaces;
using Core.BLL.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Core.WebAPI.Controllers
{
	[Authorize]
	public class AdventureController : BaseController
	{
		private readonly IAdventureService _adventureService;

		public AdventureController(IAdventureService adventureService)
		{
			_adventureService = adventureService;
		}

		[HttpPost]
		public void Create([FromBody]AdventureViewModel adventureViewModel)
		{
			_adventureService.Create(adventureViewModel);
		}

		[HttpGet]
		public void Get([FromQuery] int id)
		{
			_adventureService.Get(id);
		}

		[HttpPut]
		public void Update([FromBody] AdventureViewModel adventureViewModel)
		{
			_adventureService.Update(adventureViewModel);
		}

		[HttpDelete]
		public void Remove([FromQuery]int id)
		{
			_adventureService.Remove(id);
		}
	}
}
