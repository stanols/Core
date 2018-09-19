using System;
using System.Text;
using System.Security.Cryptography;
using Core.BLL.Interfaces;
using Core.BLL.ViewModels;
using Core.DAL.Entities;
using Core.DAL.Interfaces;


namespace Core.BLL.Services
{
	public class UserService : BaseService, IUserService
	{
		private readonly IUserRepository _userRepository;

		public UserService(IUserRepository userRepository)
		{
			_userRepository = userRepository;
		}

		public void Create(UserViewModel userViewModel)
		{
			var password = userViewModel.Password;
			var confirmedPassword = userViewModel.ConfirmedPassword;

			var passwordHash = CreatePasswordHash(password, confirmedPassword);
			userViewModel.PasswordSalt = passwordHash.Item1;
			userViewModel.PasswordHash = passwordHash.Item2;
			var newUser = MapToUser(userViewModel);

			_userRepository.Create(newUser);
		}

		public UserViewModel Get(int id)
		{
			var user =  _userRepository.Get(id);
			return MapToUserViewModel(user);
		}

		public void Update(UserViewModel userViewModel)
		{
			var user = MapToUser(userViewModel);
			_userRepository.Update(user);
		}

		public void Remove(int id)
		{
			_userRepository.Remove(id);
		}

		public UserViewModel Authenticate(string name, string password)
		{
			if (string.IsNullOrEmpty(name) || string.IsNullOrEmpty(password))
			{
				return null;
			}

			var user = _userRepository.GetBy(x => x.Name == name);

			if (user == null || !VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
			{
				return null;
			}

			return MapToUserViewModel(user);
		}

		private User MapToUser(UserViewModel userViewModel)
		{
			var user = new User
			{
				Id = userViewModel.Id,
				Name = userViewModel.Name,
				PasswordSalt = userViewModel.PasswordSalt,
				PasswordHash = userViewModel.PasswordHash
			};

			return user;
		}

		private UserViewModel MapToUserViewModel(User user, bool includeSecretData = false)
		{
			var userViewModel = new UserViewModel
			{
				Id = user.Id,
				Name = user.Name
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

		private static bool VerifyPasswordHash(string password, byte[] hash, byte[] salt)
		{
			const int hashLength = 64;
			const int saltLength = 128;

			if (string.IsNullOrWhiteSpace(password))
			{
				throw new ArgumentException("Value can't be empty or whitespace.", nameof(password));
			}

			if (hash.Length != hashLength)
			{
				throw new ArgumentException("Invalid password hash length (64 bytes expected).", nameof(hash));
			}

			if (salt.Length != saltLength)
			{
				throw new ArgumentException("Invalid password salt length of (128 bytes expected).", nameof(salt));
			}

			using (var hmac = new System.Security.Cryptography.HMACSHA512(salt))
			{
				var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
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