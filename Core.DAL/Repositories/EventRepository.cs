using Core.DAL.Entities;
using Core.DAL.Interfaces;

namespace Core.DAL.Repositories
{
	public class EventRepository : BaseRepository<Event>, IEventRepository
	{
		public EventRepository(CoreDbContext context)
			: base(context)
		{
		}

	}
}
