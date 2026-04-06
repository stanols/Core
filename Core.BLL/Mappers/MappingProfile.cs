using Core.BLL.ViewModels;
using Core.DAL.Entities;
using Mapster;

namespace Core.BLL.Mappers
{
	public class MappingProfile : IRegister
	{
		public void Register(TypeAdapterConfig config)
		{
			config.NewConfig<User, UserViewModel>()
				.TwoWays();

			config.NewConfig<User, UserInfoViewModel>()
				.Map(viewModel => viewModel.Id, user => user.Id)
				.Map(viewModel => viewModel.Name, user => user.Name)
				.Map(viewModel => viewModel.FirstName, user => user.FirstName)
				.Map(viewModel => viewModel.LastName, user => user.LastName)
				.Map(viewModel => viewModel.Email, user => user.Email)
				.TwoWays();

			config.NewConfig<Experience, ExperienceViewModel>()
				.Map(viewModel => viewModel.Id, experience => experience.Id)
				.Map(viewModel => viewModel.Name, experience => experience.Name)
				.Map(viewModel => viewModel.Description, experience => experience.Description)
				.Map(viewModel => viewModel.StartsOn, experience => experience.StartsOn)
				.Map(viewModel => viewModel.EndsOn, experience => experience.EndsOn);
			config.NewConfig<ExperienceViewModel, Experience>()
				.Map(experience => experience.Id, viewModel => viewModel.Id)
				.Map(experience => experience.Name, viewModel => viewModel.Name)
				.Map(experience => experience.Description, viewModel => viewModel.Description)
				.Map(experience => experience.StartsOn, viewModel => viewModel.StartsOn)
				.Map(experience => experience.EndsOn, viewModel => viewModel.EndsOn)
				.Map(experience => experience.Location, viewModel => viewModel.Location);

			config.NewConfig<Adventure, AdventureViewModel>()
				.Map(viewModel => viewModel.Id, adventure => adventure.Id)
				.Map(viewModel => viewModel.Name, adventure => adventure.Name)
				.Map(viewModel => viewModel.Description, adventure => adventure.Description)
				.Map(viewModel => viewModel.StartsOn, adventure => adventure.StartsOn)
				.Map(viewModel => viewModel.EndsOn, adventure => adventure.EndsOn);
			config.NewConfig<AdventureViewModel, Adventure>()
				.Map(adventure => adventure.Id, viewModel => viewModel.Id)
				.Map(adventure => adventure.Name, viewModel => viewModel.Name)
				.Map(adventure => adventure.Description, viewModel => viewModel.Description)
				.Ignore(adventure => adventure.CreatedBy)
				.Ignore(adventure => adventure.CreatedById)
				.Map(adventure => adventure.StartsOn, viewModel => viewModel.StartsOn)
				.Map(adventure => adventure.EndsOn, viewModel => viewModel.EndsOn)
				.Ignore(adventure => adventure.Experiences)
				.Ignore(adventure => adventure.AdventureUsers);

			config.NewConfig<Location, LocationViewModel>()
				.Map(viewModel => viewModel.Id, location => location.Id)
				.Map(viewModel => viewModel.Name, location => location.Name)
				.Map(viewModel => viewModel.Latitude, location => location.Latitude)
				.Map(viewModel => viewModel.Longitude, location => location.Longitude)
				.TwoWays();
		}
	}
}
