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
	    void Create(T user);
	    void Update(T user);
	    void Remove(T user);
	    void Remove(int id);
	}
}
