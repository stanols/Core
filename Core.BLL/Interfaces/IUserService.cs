using System;
using Core.BLL.ViewModels;
using Core.DAL.Entities;

namespace Core.BLL.Interfaces
{
	public interface IUserService : IBaseService<User>
	{
		void Create(UserViewModel userViewModel);

		UserViewModel Get(int id);

		void Update(UserViewModel userViewModel);

		void Remove(int id);

		UserViewModel Authenticate(string name, string password);
	}
}
