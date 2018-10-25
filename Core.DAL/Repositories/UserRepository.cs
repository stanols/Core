using Core.DAL.Entities;
using Core.DAL.Interfaces;

namespace Core.DAL.Repositories
{
	public class UserRepository : BaseRepository<User>, IUserRepository
	{
		public UserRepository(CoreDbContext context)
			: base(context)
		{
		}

	}
}
