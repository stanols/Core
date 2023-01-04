using System.Collections.Generic;
using System.Threading.Tasks;
using Core.BLL.ViewModels;
using Core.DAL.Entities;

namespace Core.BLL.Interfaces
{
	public interface IAdventureService : IBaseService<Adventure, AdventureViewModel>
	{
		Task<List<AdventureViewModel>> GetAdventuresList();
	}
}
