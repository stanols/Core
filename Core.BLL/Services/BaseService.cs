using System;
using System.Collections.Generic;
using Core.DAL.Entities;
using Core.DAL.Interfaces;
using AutoMapper;

namespace Core.BLL.Services
{
	public class BaseService<TEntity, TViewModel> 
        where TEntity : BaseEntity
        where TViewModel : class
	{
		protected IBaseRepository<TEntity> Repository { get; private set; }
        protected IMapper Mapper { get; private set; }

		public BaseService(IBaseRepository<TEntity> repository, IMapper mapper)
		{
            Repository = repository;
            Mapper = mapper;
		}

        public void Create(TViewModel entity)
        {
            var newEntity = Mapper.Map<TEntity>(entity);
            Repository.Create(newEntity);
        }

        public TViewModel Get(int id)
        {
            var entity = Repository.Get(id);
            return Mapper.Map<TViewModel>(entity);
        }

        public TViewModel GetBy(Func<TViewModel, bool> predicate)
        {
            var entity = Repository.GetBy(x => predicate(Mapper.Map<TViewModel>(x)));
            return Mapper.Map<TViewModel>(entity);
        }

        public List<TViewModel> GetAll()
        {
            var entities = Repository.GetAll();
            return MapCollection(entities);
        }

        public List<TViewModel> GetAllBy(Func<TViewModel, bool> predicate)
        {
            var entities = Repository.GetAllBy(x => predicate(Mapper.Map<TViewModel>(x)));
            return MapCollection(entities);
        }

        public void Update(TViewModel viewModel)
        {
            var entity = Mapper.Map<TEntity>(viewModel);
            Repository.Update(entity);
        }

        public void Remove(int id)
        {
            Repository.Remove(id);
        }

        public void Remove(TViewModel viewModel)
        {
            var entity = Mapper.Map<TEntity>(viewModel);
            Repository.Remove(entity);
        }

        private List<TViewModel> MapCollection(IEnumerable<TEntity> entities)
        {
            var result = new List<TViewModel>();
            var enumerator = entities.GetEnumerator();

            while (enumerator.MoveNext())
            {
                result.Add(Mapper.Map<TViewModel>(enumerator.Current));
            }

            return result;
        }
    }
}
