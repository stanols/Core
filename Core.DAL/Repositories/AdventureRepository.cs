using Core.DAL.Entities;
using Core.DAL.Interfaces;

namespace Core.DAL.Repositories
{
	public class AdventureRepository : BaseRepository<Adventure>, IAdventureRepository
	{
		public AdventureRepository(CoreDbContext context)
			: base(context)
		{
		}

	}
}
