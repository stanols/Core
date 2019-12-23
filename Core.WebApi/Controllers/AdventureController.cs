using System.Collections.Generic;
using Core.BLL.Interfaces;
using Core.BLL.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Core.WebApi.Controllers
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
		public AdventureViewModel Create([FromBody]AdventureViewModel adventureViewModel)
		{
			var adventure = _adventureService.Create(adventureViewModel);
			return adventure;
		}

		[HttpGet]
		public AdventureViewModel Get([FromQuery] int id)
		{
			var adventure = _adventureService.Get(id);
			return adventure;
		}

		[HttpGet]
		public List<AdventureViewModel> GetAll()
		{
			var adventures = _adventureService.GetAll();
			return adventures;
		}

		[HttpGet]
		public List<AdventureViewModel> GetAllBy([FromQuery] string name)
		{
			var adventures = _adventureService.GetAllBy(x => x.Name == name);
			return adventures;
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
