using System;
using Core.DAL.Entities;
using Core.BLL.ViewModels;

namespace Core.BLL.Interfaces
{
    public interface IBaseService<TEntity, TViewModel> 
        where TEntity : BaseEntity
        where TViewModel : BaseViewModel
    {
        void Create(TViewModel userViewModel);

        TViewModel Get(int id);

        void Update(TViewModel userViewModel);

        void Remove(int id);
    }
}
