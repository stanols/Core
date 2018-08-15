using System;
using System.Collections.Generic;
using System.Text;
using Core.BLL.Interfaces;
using Core.BLL.ViewModels;
using Core.DAL.Entities;
using Core.DAL.Interfaces;

namespace Core.BLL.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public UserViewModel Create(UserViewModel userViewModel)
        {
            var newUser = MapToUser(userViewModel);
            var user = _userRepository.Create(newUser);

            return MapToUserViewModel(user);
        }

        private UserViewModel MapToUserViewModel(User user)
        {
            return new UserViewModel { Id = user.Id, Name = user.Name };
        }

        private User MapToUser(UserViewModel userViewModel)
        {
            return new User
            {
                Id = userViewModel.Id,
                Name = userViewModel.Name
            };
        }

    }
}