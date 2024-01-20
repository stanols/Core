using Core.DAL.Interfaces;

namespace Core.DAL
{
    public class UnitOfWork
    {
        private readonly IAdventureRepository _adventureRepository;
        private readonly IExperienceRepository _experienceRepository;
        private readonly IUserRepository _userRepository;
        private readonly ILocationRepository _locationRepository;

        public UnitOfWork(
            IAdventureRepository adventureRepository,
            IExperienceRepository experienceRepository,
            IUserRepository userRepository,
            ILocationRepository locationRepository)
        {
            _adventureRepository = adventureRepository;
            _experienceRepository = experienceRepository;
            _userRepository = userRepository;
            _locationRepository = locationRepository;
        }

        public IAdventureRepository AdventureRepository
        {
            get { return _adventureRepository; }
        }

        public IExperienceRepository ExperienceRepository
        {
            get { return _experienceRepository; }
        }

        public IUserRepository UserRepository
        {
            get { return _userRepository; }
        }

        public ILocationRepository LocationRepository
        {
            get { return _locationRepository; }
        }
    }
}
