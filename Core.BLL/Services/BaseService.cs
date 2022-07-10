using System;
using System.Collections.Generic;
using Core.DAL.Entities;
using Core.DAL.Interfaces;
using Core.BLL.Interfaces;
using Core.BLL.ViewModels;
using AutoMapper;

namespace Core.BLL.Services
{
	public class BaseService<TEntity, TViewModel> : IBaseService<TEntity, TViewModel>
		where TEntity : BaseEntity
		where TViewModel : BaseViewModel
	{
		protected IBaseRepository<TEntity> Repository { get; private set; }
		protected IMapper Mapper { get; private set; }

		public BaseService(IBaseRepository<TEntity> repository, IMapper mapper)
		{
			Repository = repository;
			Mapper = mapper;
		}

		public virtual int Create(TViewModel viewModel)
		{
			var entity = Mapper.Map<TEntity>(viewModel);
			var id = Repository.Create(entity);

			return id;
		}

		public virtual TViewModel Get(int id)
		{
			var entity = Repository.Get(id);
			return Mapper.Map<TViewModel>(entity);
		}

		public virtual TViewModel GetBy(Func<TViewModel, bool> predicate)
		{
			var entity = Repository.GetBy(x => predicate(Mapper.Map<TViewModel>(x)));
			return Mapper.Map<TViewModel>(entity);
		}

		public virtual List<TViewModel> GetAll()
		{
			var entities = Repository.GetAll();
			return MapCollection(entities);
		}

		public virtual List<TViewModel> GetAllBy(Func<TViewModel, bool> predicate)
		{
			var entities = Repository.GetAllBy(x => predicate(Mapper.Map<TViewModel>(x)));
			return MapCollection(entities);
		}

		public virtual void Update(TViewModel viewModel)
		{
			var entity = Mapper.Map<TEntity>(viewModel);
			Repository.Update(entity);
		}

		public virtual void Remove(int id)
		{
			Repository.Remove(id);
		}

		public virtual void Remove(TViewModel viewModel)
		{
			var entity = Mapper.Map<TEntity>(viewModel);
			Repository.Remove(entity);
		}

		protected List<TViewModel> MapCollection(IEnumerable<TEntity> entities)
		{
			var result = new List<TViewModel>();

			using (var enumerator = entities.GetEnumerator())
			{
				while (enumerator.MoveNext())
				{
					result.Add(Mapper.Map<TViewModel>(enumerator.Current));
				}
			}

			return result;
		}
	}
}
