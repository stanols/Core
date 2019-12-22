using System;
using System.Collections.Generic;

namespace Core.BLL.ViewModels
{
	public class AdventureViewModel : BaseViewModel
	{
		public string Name { get; set; }
		public string Description { get; set; }
		public UserInfoViewModel CreatedBy { get; set; }
		public DateTime StartsOn { get; set; }
		public DateTime EndsOn { get; set; }
		public List<ExperienceViewModel> Events { get; set; }
		public List<UserViewModel> Participants { get; set; }
	}
}
