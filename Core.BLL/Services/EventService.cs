using AutoMapper;
using Core.BLL.Interfaces;
using Core.BLL.ViewModels;
using Core.DAL.Entities;
using Core.DAL.Interfaces;


namespace Core.BLL.Services
{
	public class EventService : BaseService<Event, EventViewModel>, IEventService
	{
		public EventService(IEventRepository eventRepository, IMapper mapper)
			: base(eventRepository, mapper)
		{
		}

	}
}
