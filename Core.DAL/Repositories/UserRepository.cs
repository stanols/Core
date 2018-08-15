using System;
using Core.DAL.Entities;
using Core.DAL.Interfaces;

namespace Core.DAL.Repositories
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        private readonly CoreDbContext _context;
        public UserRepository(CoreDbContext context)
        {
            _context = context;
        }

        public User Create(User user)
        {
            var entity = _context.Users.Add(user);
            _context.SaveChanges();
            return entity.Entity;
        }
    }
}
