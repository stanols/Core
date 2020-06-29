using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Security.Cryptography.X509Certificates;
using Core.BLL.ViewModels;
using Core.DAL.Entities;
using AutoMapper;

namespace Core.BLL.Mappers
{
	public class MappingProfile : Profile
	{
		public MappingProfile()
		{
			CreateMap<User, UserViewModel>();
			CreateMap<UserViewModel, User>();

			CreateMap<User, UserInfoViewModel>()
				.ForMember(x => x.Id, x => x.MapFrom(y => y.Id))
				.ForMember(x => x.Name, x => x.MapFrom(y => y.Name))
				.ForMember(x => x.FirstName, x => x.MapFrom(y => y.FirstName))
				.ForMember(x => x.LastName, x => x.MapFrom(y => y.LastName))
				.ForMember(x => x.Email, x => x.MapFrom(y => y.Email));
			CreateMap<UserInfoViewModel, User>()
				.ForMember(x => x.Id, x => x.MapFrom(y => y.Id))
				.ForMember(x => x.Name, x => x.MapFrom(y => y.Name))
				.ForMember(x => x.FirstName, x => x.MapFrom(y => y.FirstName))
				.ForMember(x => x.LastName, x => x.MapFrom(y => y.LastName))
				.ForMember(x => x.Email, x => x.MapFrom(y => y.Email));

			CreateMap<Adventure, AdventureViewModel>()
				.ForMember(x => x.Id, x => x.MapFrom(y => y.Id))
				.ForMember(x => x.Name, x => x.MapFrom(y => y.Name))
				.ForMember(x => x.Description, x => x.MapFrom(y => y.Description))
				.ForMember(x => x.CreatedBy, x => x.MapFrom(y => y.CreatedBy))
				.ForMember(x => x.StartsOn, x => x.MapFrom(y => y.StartsOn))
				.ForMember(x => x.EndsOn, x => x.MapFrom(y => y.EndsOn))
				.ForMember(
					x => x.Experiences,
					x => 
						x.MapFrom(y => y.Experiences));
			CreateMap<AdventureViewModel, Adventure>()
				.ForMember(x => x.Id, x => x.MapFrom(y => y.Id))
				.ForMember(x => x.Name, x => x.MapFrom(y => y.Name))
				.ForMember(x => x.Description, x => x.MapFrom(y => y.Description))
				.ForMember(x => x.CreatedBy, x => x.MapFrom(y => y.CreatedBy))
				.ForMember(x => x.StartsOn, x => x.MapFrom(y => y.StartsOn))
				.ForMember(x => x.EndsOn, x => x.MapFrom(y => y.EndsOn))
				.ForMember(
					x => x.Experiences,
					x =>
						x.MapFrom(y => y.Experiences
							.Select(Mapper.Map<Experience>)
							.ToList()));
				//.ForMember(
				//	x => x.AdventureUsers,
				//	x => 
				//		x.MapFrom(y => y.Participants
				//			.Select(Mapper.Map<User>)
				//			.ToList()));

			CreateMap<Experience, ExperienceViewModel>()
				.ForMember(x => x.Id, x => x.MapFrom(y => y.Id))
				.ForMember(x => x.Name, x => x.MapFrom(y => y.Name))
				.ForMember(x => x.Description, x => x.MapFrom(y => y.Description))
				.ForMember(x => x.StartsOn, x => x.MapFrom(y => y.StartsOn))
				.ForMember(x => x.EndsOn, x => x.MapFrom(y => y.EndsOn))
				.ForMember(x => x.Location, x => x.MapFrom(y => y.Location));
			CreateMap<ExperienceViewModel, Experience>()
				.ForMember(x => x.Id, x => x.MapFrom(y => y.Id))
				.ForMember(x => x.Name, x => x.MapFrom(y => y.Name))
				.ForMember(x => x.Description, x => x.MapFrom(y => y.Description))
				.ForMember(x => x.StartsOn, x => x.MapFrom(y => y.StartsOn))
				.ForMember(x => x.EndsOn, x => x.MapFrom(y => y.EndsOn))
				.ForMember(x => x.Location, x => x.MapFrom(y => y.Location));

			CreateMap<Location, LocationViewModel>()
				.ForMember(x => x.Id, x => x.MapFrom(y => y.Id))
				.ForMember(x => x.Name, x => x.MapFrom(y => y.Name))
				.ForMember(x => x.Latitude, x => x.MapFrom(y => y.Latitude))
				.ForMember(x => x.Longitude, x => x.MapFrom(y => y.Longitude));
			CreateMap<LocationViewModel, Location>()
				.ForMember(x => x.Id, x => x.MapFrom(y => y.Id))
				.ForMember(x => x.Name, x => x.MapFrom(y => y.Name))
				.ForMember(x => x.Latitude, x => x.MapFrom(y => y.Latitude))
				.ForMember(x => x.Longitude, x => x.MapFrom(y => y.Longitude));
		}
	}
}
