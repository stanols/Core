using System.Collections.Generic;
using AutoMapper;
using Core.BLL.ViewModels;
using Core.DAL.Entities;

namespace Core.BLL.Mappers
{
	public class MappingProfile : Profile
	{
		public MappingProfile()
		{
			CreateMap<User, UserViewModel>();
			CreateMap<UserViewModel, User>();

			CreateMap<Adventure, AdventureViewModel>();
			CreateMap<AdventureViewModel, Adventure>()
				.ForMember(x => x.Id, x => x.MapFrom(y => y.Id))
				.ForMember(x => x.Name, x => x.MapFrom(y => y.Name))
				.ForMember(x => x.Description, x => x.MapFrom(y => y.Description))
				.ForMember(x => x.CreatedBy, x => x.MapFrom(y => y.CreatedBy))
				.ForMember(x => x.StartsOn, x => x.MapFrom(y => y.StartsOn))
				.ForMember(x => x.EndsOn, x => x.MapFrom(y => y.EndsOn))
				.ForMember(x => x.AdventureUsers, x => x.MapFrom(y => y.Participants));

			CreateMap<Experience, ExperienceViewModel>();
			CreateMap<ExperienceViewModel, Experience>();

			CreateMap<Location, LocationViewModel>();
			CreateMap<LocationViewModel, Location>();
		}
	}
}
