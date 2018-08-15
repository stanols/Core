using System;
using Core.BLL.ViewModels;

namespace Core.BLL.Interfaces
{
    public interface IUserService
    {
        UserViewModel Create(UserViewModel userViewModel);
    }
}
