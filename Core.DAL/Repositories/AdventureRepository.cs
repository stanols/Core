using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
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

		public async Task<List<Adventure>> GetAdventuresList()
		{
			var entities = await Entities
				.Include("Experiences")
				.ToListAsync();

			return entities;
		}
	}
}
