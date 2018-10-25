using Core.BLL.ViewModels;
using Core.DAL.Entities;

namespace Core.BLL.Interfaces
{
	public interface IUserService : IBaseService<User, UserViewModel>
	{
		UserViewModel Authenticate(string name, string password);
	}
}
