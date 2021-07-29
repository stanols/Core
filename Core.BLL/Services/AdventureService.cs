using System;
using System.Linq;
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

		public override int Create(AdventureViewModel viewModel)
		{
            var entity = Mapper.Map<Adventure>(viewModel);

            entity.Experiences = viewModel.Experiences
                .Select(x => Mapper.Map<Experience>(x))
                .ToList();
            entity.AdventureUsers = viewModel.Participants
                .Select(x => Mapper.Map<AdventureUser>(x))
                .ToList();
            entity.CreatedBy = Mapper.Map<User>(viewModel.CreatedBy);

            var id = Repository.Create(entity);

			return id;
		}
	}
}
