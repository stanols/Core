using System;
using System.Collections.Generic;
using System.Text;
using Core.DAL.Entities;

namespace Core.BLL.Interfaces
{
    public interface IBaseService<T> where T : BaseEntity
    {
    }
}
