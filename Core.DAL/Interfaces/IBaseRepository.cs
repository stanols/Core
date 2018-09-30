using System;
using System.Collections.Generic;
using Core.DAL.Entities;

namespace Core.DAL.Interfaces
{
    public interface IBaseRepository<T> where T : BaseEntity
    {
	    T Get(int id);
	    T GetBy(Func<T, bool> predicate);
	    IEnumerable<T> GetAll();
	    IEnumerable<T> GetAllBy(Func<T, bool> predicate);
	    void Create(T entity);
	    void Update(T entity);
	    void Remove(T entity);
	    void Remove(int id);
	}
}
