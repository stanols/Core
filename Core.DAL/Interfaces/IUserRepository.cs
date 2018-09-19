using System;
using System.Collections.Generic;
using Core.DAL.Entities;

namespace Core.DAL.Interfaces
{
    public interface IUserRepository
    {
	    User Get(int id);
	    User GetBy(Func<User, bool> predicate);
	    IEnumerable<User> GetAll();
	    IEnumerable<User> GetAllBy(Func<User, bool> predicate);
        void Create(User user);
	    void Update(User user);
	    void Remove(User user);
	    void Remove(int id);
    }
}
