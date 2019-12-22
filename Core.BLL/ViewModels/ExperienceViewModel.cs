using System;

namespace Core.BLL.ViewModels
{
	public class ExperienceViewModel : BaseViewModel
	{
		public string Name { get; set; }
		public string Description { get; set; }
		public LocationViewModel Location { get; set; }
		public DateTime StartsOn { get; set; }
		public DateTime EndsOn { get; set; }
	}
}
