using System;
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
            CreateMap<UserViewModel, User>();

            CreateMap<Adventure, AdventureViewModel>();            
            CreateMap<AdventureViewModel, Adventure>();
        }
    }
}
