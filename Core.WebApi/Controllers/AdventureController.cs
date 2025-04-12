using System.Collections.Generic;
using System.Threading.Tasks;
using Core.BLL.Interfaces;
using Core.BLL.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Core.WebApi.Controllers
{
	public class AdventureController : BaseController
	{
		private readonly IAdventureService _adventureService;

		public AdventureController(IAdventureService adventureService)
		{
			_adventureService = adventureService;
		}

		[Authorize]
		[HttpPost]
		public int Create([FromBody]AdventureViewModel adventureViewModel)
		{
			return _adventureService.Create(adventureViewModel);
		}

		[Authorize]
		[HttpGet]
		public AdventureViewModel Get([FromQuery] int id)
		{
			var adventure = _adventureService.Get(id);

			return adventure;
		}

		[Authorize]
		[HttpGet]
		public List<AdventureViewModel> GetAll()
		{
			var adventures = _adventureService.GetAll();

			return adventures;
		}

		[Authorize]
		[HttpGet]
		public async Task<List<AdventureViewModel>> GetAdventuresList()
		{
			var adventures = await _adventureService.GetAdventuresList();

			return adventures;
		}

		[Authorize]
		[HttpGet]
		public List<AdventureViewModel> GetAllBy([FromQuery] string name)
		{
			var adventures = _adventureService.GetAllBy(x => x.Name == name);

			return adventures;
		}

		[Authorize]
		[HttpPut]
		public void Update([FromBody] AdventureViewModel adventureViewModel)
		{
			_adventureService.Update(adventureViewModel);
		}

		[Authorize]
		[HttpDelete]
		public void Remove([FromQuery]int id)
		{
			_adventureService.Remove(id);
		}
	}
}
