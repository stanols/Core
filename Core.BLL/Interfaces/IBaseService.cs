using System;
using System.Collections.Generic;
using Core.DAL.Entities;
using Core.BLL.ViewModels;

namespace Core.BLL.Interfaces
{
	public interface IBaseService<TEntity, TViewModel>
		where TEntity : BaseEntity
		where TViewModel : BaseViewModel
	{
		int Create(TViewModel userViewModel);

		TViewModel Get(int id);

		List<TViewModel> GetAll();

		List<TViewModel> GetAllBy(Func<TViewModel, bool> predicate);

		void Update(TViewModel userViewModel);

		void Remove(int id);
	}
}
