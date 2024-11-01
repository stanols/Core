using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Core.WebApi.Hubs.Clients.Interfaces;
using Core.WebApi.Hubs.Clients.Messages;

namespace Core.WebApi.Hubs
{
	public class ChatHub : Hub<IChatClient>
	{
		public ChatHub()
		{
		}

		public async Task SendMessageToAll(ChatMessage message)
		{
			await Clients.All.ReceiveMessage(message);
		}
	}
}
