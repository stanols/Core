using Core.BLL.Interfaces;
using Microsoft.AspNetCore.Authorization;


namespace Core.WebAPI.Controllers
{
	[Authorize]
	public class LocationController : BaseController
	{
		private readonly ILocationService _locationService;

		public LocationController(ILocationService locationService)
		{
			_locationService = locationService;
		}
	}
}
