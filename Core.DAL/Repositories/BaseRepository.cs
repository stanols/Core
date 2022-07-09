using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Core.DAL.Entities;
using Core.DAL.Interfaces;

namespace Core.DAL.Repositories
{
	public class BaseRepository<T> : IBaseRepository<T>
		where T : BaseEntity
	{
		private readonly CoreDbContext _context;
		private readonly DbSet<T> _entities;

		public BaseRepository(CoreDbContext context)
		{
			_context = context;
			_entities = context.Set<T>();
		}

		public T Get(int id)
		{
			return _entities.SingleOrDefault(s => s.Id == id);
		}

		public T GetBy(Func<T, bool> predicate)
		{
			return _entities.SingleOrDefault(predicate);
		}

		public IEnumerable<T> GetAll()
		{
			return _entities.AsEnumerable();
		}

		public IEnumerable<T> GetAllBy(Func<T, bool> predicate)
		{
			return _entities.Where(predicate);
		}

		public int Create(T entity)
		{
			if (entity == null)
			{
				throw new ArgumentNullException(nameof(entity));
			}

			_entities.Add(entity);
			_context.SaveChanges();

			return entity.Id;
		}

		public void Update(T entity)
		{
			if (entity == null)
			{
				throw new ArgumentNullException(nameof(entity));
			}

			_entities.Update(entity);
			_context.SaveChanges();
		}

		public void Remove(T entity)
		{
			if (entity == null)
			{
				throw new ArgumentNullException(nameof(entity));
			}

			_entities.Remove(entity);
			_context.SaveChanges();
		}

		public void Remove(int id)
		{
			var entity = Get(id);

			if (entity == null)
			{
				throw new InvalidOperationException($"Can't remove {nameof(entity)} with id = {id}");
			}

			_entities.Remove(entity);
			_context.SaveChanges();
		}
	}
}
