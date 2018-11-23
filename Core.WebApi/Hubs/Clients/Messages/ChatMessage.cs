namespace Core.WebAPI.Hubs.Clients.Messages
{
	public class ChatMessage : BaseMessage
	{
		public string UserName { get; set; }
		public string Message { get; set; }
	}
}
