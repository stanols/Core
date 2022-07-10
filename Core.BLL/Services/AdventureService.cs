using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Core.BLL.Interfaces;
using Core.BLL.ViewModels;
using Core.DAL.Entities;
using Core.DAL.Interfaces;
using AutoMapper;

namespace Core.BLL.Services
{
	public class AdventureService : BaseService<Adventure, AdventureViewModel>, IAdventureService
	{
		private readonly IUserRepository _userRepository;
		private readonly IExperienceRepository _experienceRepository;

		public AdventureService(
			IAdventureRepository adventureRepository,
			IUserRepository userRepository,
			IExperienceRepository experienceRepository,
			IMapper mapper)
			: base(adventureRepository, mapper)
		{
			_userRepository = userRepository;
			_experienceRepository = experienceRepository;
		}

		public override int Create(AdventureViewModel viewModel)
		{
			var entity = MapAdventureViewModel(viewModel);

			var id = Repository.Create(entity);

			return id;
		}

		public async Task<List<AdventureViewModel>> GetAdventuresList()
		{
			var adventures = await ((IAdventureRepository)Repository).GetAdventuresList();

			var adventureViewModels = MapCollection(adventures);

			return adventureViewModels;
		}

		public override void Update(AdventureViewModel viewModel)
		{
			var entity = MapAdventureViewModel(viewModel);

			Repository.Update(entity);
		}

		private Adventure MapAdventureViewModel(AdventureViewModel viewModel)
		{
			var entity = Mapper.Map<Adventure>(viewModel);

			var createdById = viewModel.CreatedBy.Id;
			var user = _userRepository.GetBy(x => x.Id == createdById);
			entity.CreatedBy = user;

			var experienceIds = viewModel.Experiences?
				.Select(x => x.Id)
				.ToList();

			var experiences = _experienceRepository.GetAllBy(x => experienceIds.Contains(x.Id));
			entity.Experiences = experiences.ToList();

			return entity;
		}
	}
}
