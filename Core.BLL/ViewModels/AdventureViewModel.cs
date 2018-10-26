using System;
using System.Collections.Generic;

namespace Core.BLL.ViewModels
{
	public class AdventureViewModel : BaseViewModel
	{
		public string Description { get; set; }
		public string CreatedBy { get; set; }
		public DateTime StartsOn { get; set; }
		public DateTime EndsOn { get; set; }
		public List<EventViewModel> Events { get; set; }
		public List<UserViewModel> Participants { get; set; }
	}
}
