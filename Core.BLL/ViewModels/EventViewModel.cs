using System;

namespace Core.BLL.ViewModels
{
    public class EventViewModel : BaseViewModel
    {
        public string Name { get; set; }
        public DateTime StartsOn { get; set; }
        public DateTime EndsOn { get; set; }
    }
}
