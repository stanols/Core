using System;
using Core.DAL.Entities;

namespace Core.DAL.Interfaces
{
    public interface IUserRepository
    {
        User Create(User user);
    }
}
