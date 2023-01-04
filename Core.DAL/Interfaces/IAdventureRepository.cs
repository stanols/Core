using System.Collections.Generic;
using System.Threading.Tasks;
using Core.DAL.Entities;

namespace Core.DAL.Interfaces
{
	public interface IAdventureRepository : IBaseRepository<Adventure>
	{
		Task<List<Adventure>> GetAdventuresList();
	}
}
