using System;
using Core.BLL.ViewModels;

namespace Core.BLL.Interfaces
{
	public interface IUserService
	{
		void Create(UserViewModel userViewModel);

		UserViewModel Get(int id);

		void Update(UserViewModel userViewModel);

		void Remove(int id);

		UserViewModel Authenticate(string name, string password);
	}
}
