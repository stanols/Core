using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Core.WebAPI.Hubs.Clients.Interfaces;
using Core.WebAPI.Hubs.Messages;

namespace Core.WebAPI.Hubs
{
	public class ChatHub : Hub<IChartClient>
	{
		public ChatHub()
		{
		}

		public async Task SendMessage(string user, ChatMessage message)
		{
			await Clients.All.ReceiveMessage(user, message);
		}

		public Task SendMessageToCaller(ChatMessage message)
		{
			return Clients.Caller.ReceiveMessage(message);
		}
	}
}
