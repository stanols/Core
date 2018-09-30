using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using Core.BLL.ViewModels;
using Core.DAL.Entities;

namespace Core.BLL.Mappers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<User, UserViewModel>();
        }
    }
}
