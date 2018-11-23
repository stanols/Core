namespace Core.WebAPI.Hubs.Clients.Messages
{
	public class AdventureMessage : BaseMessage
	{
		public string User { get; set; }
		public string Message { get; set; }
	}
}
