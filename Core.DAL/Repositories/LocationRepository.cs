using Core.DAL.Entities;
using Core.DAL.Interfaces;

namespace Core.DAL.Repositories
{
	public class LocationRepository : BaseRepository<Location>, ILocationRepository
	{
		public LocationRepository(CoreDbContext context)
			: base(context)
		{
		}

	}
}
