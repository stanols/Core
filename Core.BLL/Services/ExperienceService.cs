using AutoMapper;
using Core.BLL.Interfaces;
using Core.BLL.ViewModels;
using Core.DAL.Entities;
using Core.DAL.Interfaces;


namespace Core.BLL.Services
{
	public class ExperienceService : BaseService<Experience, ExperienceViewModel>, IExperienceService
	{
		public ExperienceService(IExperienceRepository eventRepository, IMapper mapper)
			: base(eventRepository, mapper)
		{
		}

	}
}
