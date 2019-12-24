using Core.DAL.Entities;
using Core.DAL.Interfaces;

namespace Core.DAL.Repositories
{
	public class ExperienceRepository : BaseRepository<Experience>, IExperienceRepository
	{
		public ExperienceRepository(CoreDbContext context)
			: base(context)
		{
		}
	}
}
