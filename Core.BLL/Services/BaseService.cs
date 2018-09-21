using System;
using System.Collections.Generic;
using Core.DAL.Entities;
using Core.DAL.Interfaces;

namespace Core.BLL.Services
{
	public class BaseService<T> where T : BaseEntity
	{
		private readonly IBaseRepository<T> _repository;

		public BaseService(IBaseRepository<T> repository)
		{
			_repository = repository;
		}

		public void Create(T entity)
		{
			_repository.Create(entity);
		}

		public T Get(int id)
		{
			return _repository.Get(id);
		}

		public T GetBy(Func<T, bool> predicate)
		{
			return _repository.GetBy(predicate);
		}

		public IEnumerable<T> GetAll()
		{
			return _repository.GetAll();
		}

		public IEnumerable<T> GetAllBy(Func<T, bool> predicate)
		{
			return _repository.GetAllBy(predicate);
		}

		public void Update(T entity)
		{
			_repository.Update(entity);
		}

		public void Remove(int id)
		{
			_repository.Remove(id);
		}

		public void Remove(T entity)
		{
			_repository.Remove(entity);
		}
	}
}
