using System;

namespace Core.BLL.ViewModels
{
    public class UserViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        public string Password { get; set; }
	    public string ConfirmedPassword { get; set; }
		
	    public byte[] PasswordSalt { get; set; }
	    public byte[] PasswordHash { get; set; }

	    public string Token { get; set; }
    }
}
