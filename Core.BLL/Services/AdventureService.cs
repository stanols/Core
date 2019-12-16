using Core.BLL.Interfaces;
using Core.BLL.ViewModels;
using Core.DAL.Entities;
using Core.DAL.Interfaces;
using AutoMapper;

namespace Core.BLL.Services
{
	public class AdventureService : BaseService<Adventure, AdventureViewModel>, IAdventureService
	{
		public AdventureService(IAdventureRepository adventureRepository, IMapper mapper)
			: base(adventureRepository, mapper)
		{
		}
	}
}
