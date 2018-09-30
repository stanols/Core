using System;
using Core.BLL.Interfaces;
using Core.BLL.ViewModels;

namespace Core.WebAPI.Controllers
{
    public class AdventureController : BaseController
    {
        private readonly IAdventureService _adventureService;

        public AdventureController(IAdventureService adventureService)
        {
            _adventureService = adventureService;
        }
    }
}
