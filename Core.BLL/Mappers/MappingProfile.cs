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
				.ForMember(viewModel => viewModel.Id, user => user.MapFrom(y => y.Id))
				.ForMember(viewModel => viewModel.Name, user => user.MapFrom(y => y.Name))
				.ForMember(viewModel => viewModel.FirstName, user => user.MapFrom(y => y.FirstName))
				.ForMember(viewModel => viewModel.LastName, user => user.MapFrom(y => y.LastName))
				.ForMember(viewModel => viewModel.Email, user => user.MapFrom(y => y.Email));
			CreateMap<UserInfoViewModel, User>()
				.ForMember(user => user.Id, viewModel => viewModel.MapFrom(y => y.Id))
				.ForMember(user => user.Name, viewModel => viewModel.MapFrom(y => y.Name))
				.ForMember(user => user.FirstName, viewModel => viewModel.MapFrom(y => y.FirstName))
				.ForMember(user => user.LastName, viewModel => viewModel.MapFrom(y => y.LastName))
				.ForMember(user => user.Email, viewModel => viewModel.MapFrom(y => y.Email));

			CreateMap<Experience, ExperienceViewModel>()
				.ForMember(viewModel => viewModel.Id, experience => experience.MapFrom(y => y.Id))
				.ForMember(viewModel => viewModel.Name, experience => experience.MapFrom(y => y.Name))
				.ForMember(viewModel => viewModel.Description, experience => experience.MapFrom(y => y.Description))
				.ForMember(viewModel => viewModel.StartsOn, experience => experience.MapFrom(y => y.StartsOn))
				.ForMember(viewModel => viewModel.EndsOn, experience => experience.MapFrom(y => y.EndsOn));
			CreateMap<ExperienceViewModel, Experience>()
				.ForMember(experience => experience.Id, viewModel => viewModel.MapFrom(y => y.Id))
				.ForMember(experience => experience.Name, viewModel => viewModel.MapFrom(y => y.Name))
				.ForMember(experience => experience.Description, viewModel => viewModel.MapFrom(y => y.Description))
				.ForMember(experience => experience.StartsOn, viewModel => viewModel.MapFrom(y => y.StartsOn))
				.ForMember(experience => experience.EndsOn, viewModel => viewModel.MapFrom(y => y.EndsOn))
				.ForMember(experience => experience.Location, viewModel => viewModel.MapFrom(y => y.Location));

			CreateMap<Adventure, AdventureViewModel>()
				.ForMember(viewModel => viewModel.Id, adventure => adventure.MapFrom(y => y.Id))
				.ForMember(viewModel => viewModel.Name, adventure => adventure.MapFrom(y => y.Name))
				.ForMember(viewModel => viewModel.Description, adventure => adventure.MapFrom(y => y.Description))
				.ForMember(viewModel => viewModel.StartsOn, adventure => adventure.MapFrom(y => y.StartsOn))
				.ForMember(viewModel => viewModel.EndsOn, adventure => adventure.MapFrom(y => y.EndsOn));
			CreateMap<AdventureViewModel, Adventure>()
				.ForMember(adventure => adventure.Id, viewModel => viewModel.MapFrom(y => y.Id))
				.ForMember(adventure => adventure.Name, viewModel => viewModel.MapFrom(y => y.Name))
				.ForMember(adventure => adventure.Description, viewModel => viewModel.MapFrom(y => y.Description))
				.ForMember(adventure => adventure.CreatedBy, viewModel => viewModel.Ignore())
				.ForMember(adventure => adventure.CreatedById, viewModel => viewModel.Ignore())
				.ForMember(adventure => adventure.StartsOn, viewModel => viewModel.MapFrom(y => y.StartsOn))
				.ForMember(adventure => adventure.EndsOn, viewModel => viewModel.MapFrom(y => y.EndsOn))
				.ForMember(adventure => adventure.Experiences, viewModel => viewModel.Ignore())
				.ForMember(adventure => adventure.AdventureUsers, viewModel => viewModel.Ignore());

			CreateMap<Location, LocationViewModel>()
				.ForMember(viewModel => viewModel.Id, location => location.MapFrom(y => y.Id))
				.ForMember(viewModel => viewModel.Name, location => location.MapFrom(y => y.Name))
				.ForMember(viewModel => viewModel.Latitude, location => location.MapFrom(y => y.Latitude))
				.ForMember(viewModel => viewModel.Longitude, location => location.MapFrom(y => y.Longitude));
			CreateMap<LocationViewModel, Location>()
				.ForMember(location => location.Id, viewModel => viewModel.MapFrom(y => y.Id))
				.ForMember(location => location.Name, viewModel => viewModel.MapFrom(y => y.Name))
				.ForMember(location => location.Latitude, viewModel => viewModel.MapFrom(y => y.Latitude))
				.ForMember(location => location.Longitude, viewModel => viewModel.MapFrom(y => y.Longitude));
		}
	}
}
