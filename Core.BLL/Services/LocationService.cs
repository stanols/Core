using AutoMapper;
using Core.BLL.Interfaces;
using Core.BLL.ViewModels;
using Core.DAL.Entities;
using Core.DAL.Interfaces;

namespace Core.BLL.Services
{
	public class LocationService : BaseService<Location, LocationViewModel>, ILocationService
	{
		public LocationService(ILocationRepository locationRepository, IMapper mapper)
			: base(locationRepository, mapper)
		{
		}
	}
}
