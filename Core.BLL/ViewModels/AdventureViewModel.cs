using System;

namespace Core.BLL.ViewModels
{
	public class AdventureViewModel : BaseViewModel
	{
		public string Name { get; set; }
		public string Description { get; set; }
		public DateTime StartsOn { get; set; }
		public DateTime EndsOn { get; set; }
		public int CreatedById { get; set; }
	}
}
