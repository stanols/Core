using System;
using System.Text;
using System.Security.Cryptography;
using Core.BLL.Interfaces;
using Core.BLL.ViewModels;
using Core.DAL.Entities;
using Core.DAL.Interfaces;
using AutoMapper;


namespace Core.BLL.Services
{
	public class UserService : BaseService<User, UserViewModel>, IUserService
	{
		public UserService(IUserRepository userRepository, IMapper mapper)
			: base(userRepository, mapper)
		{
        }

		public new void Create(UserViewModel userViewModel)
		{
			var password = userViewModel.Password;
			var confirmedPassword = userViewModel.ConfirmedPassword;
			var passwordHash = CreatePasswordHash(password, confirmedPassword);

            var newUser = new User
            {
                Name = userViewModel.Name,
                FirstName = userViewModel.FirstName,
                LastName = userViewModel.LastName,
                Email = userViewModel.Email,
                PasswordSalt = passwordHash.Item1,
                PasswordHash = passwordHash.Item2
            };

            Repository.Create(newUser);
		}

		public new UserViewModel Get(int id)
		{
			var user = Repository.Get(id);
			return MapToUserViewModel(user);
		}

		public new void Update(UserViewModel userViewModel)
		{
            var id = userViewModel.Id;            
            var user = Repository.Get(id);
            if (user == null)
            {
                throw new InvalidOperationException($"User with id='{id}' is not found");
            }

            var name = userViewModel.Name;
            if (name != user.Name)
            {
                var existingUser = Repository.GetBy(x => x.Name == name);
                if (existingUser != null)
                {
                    throw new InvalidOperationException($"User with name '{name}' is already exist");
                }
                user.Name = userViewModel.Name;
            }
                        
            user.FirstName = userViewModel.FirstName;
            user.LastName = userViewModel.LastName;
            user.Email = userViewModel.Email;

            var password = userViewModel.Password;
            var confirmedPassword = userViewModel.ConfirmedPassword;
            if (!string.IsNullOrWhiteSpace(password))
            {
                var passwordHash = CreatePasswordHash(userViewModel.Password, userViewModel.ConfirmedPassword);

                user.PasswordSalt = passwordHash.Item1;
                user.PasswordHash = passwordHash.Item2;
            }
            
			Repository.Update(user);
		}

		public UserViewModel Authenticate(string name, string password)
		{
			if (string.IsNullOrEmpty(name) || string.IsNullOrEmpty(password))
			{
				return null;
			}

			var user = Repository.GetBy(x => x.Name == name);

			if (user == null || !VerifyPasswordHash(password, user.PasswordSalt, user.PasswordHash))
			{
				return null;
			}

			return MapToUserViewModel(user);
		}

		private UserViewModel MapToUserViewModel(User user, bool includeSecretData = false)
		{
			var userViewModel = new UserViewModel
			{
				Id = user.Id,
				Name = user.Name,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email
			};

			if (includeSecretData)
			{
				userViewModel.PasswordSalt = user.PasswordSalt;
				userViewModel.PasswordHash = user.PasswordHash;
			}

			return userViewModel;
		}

		private static Tuple<byte[], byte[]> CreatePasswordHash(string password, string confirmedPassword)
		{
			if (string.IsNullOrWhiteSpace(password))
			{
				throw new ArgumentException("Value can't be empty or whitespace.", nameof(password));
			}

			if (string.IsNullOrWhiteSpace(confirmedPassword))
			{
				throw new ArgumentException("Value can't be empty or whitespace.", nameof(confirmedPassword));
			}

			if (!string.Equals(password, confirmedPassword))
			{
				throw new ArgumentException("These passwords didn't match.");
			}

			byte[] salt;
			byte[] hash;
			using (var hmac = new HMACSHA512())
			{
				salt = hmac.Key;
				hash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
			}

			return Tuple.Create(salt, hash);
		}

		private static bool VerifyPasswordHash(string password, byte[] salt, byte[] hash)
		{
            const int saltLength = 128;
            const int hashLength = 64;			

			if (string.IsNullOrWhiteSpace(password))
			{
				throw new ArgumentException("Value can't be empty or whitespace.", nameof(password));
			}

            if (salt.Length != saltLength)
            {
                throw new ArgumentException("Invalid password salt length of (128 bytes expected).", nameof(salt));
            }

            if (hash.Length != hashLength)
			{
				throw new ArgumentException("Invalid password hash length (64 bytes expected).", nameof(hash));
			}			

			using (var hmac = new HMACSHA512(salt))
			{
				var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
				for (var i = 0; i < computedHash.Length; i++)
				{
					if (computedHash[i] != hash[i])
					{
						return false;
					}
				}
			}

			return true;
		}
	}
}