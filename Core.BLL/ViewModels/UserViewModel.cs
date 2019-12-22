namespace Core.BLL.ViewModels
{
	public class UserViewModel : UserInfoViewModel
	{
		public string Password { get; set; }
		public string ConfirmedPassword { get; set; }

		public byte[] PasswordSalt { get; set; }
		public byte[] PasswordHash { get; set; }

		public string Token { get; set; }
	}
}
