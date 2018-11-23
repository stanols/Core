using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Core.WebAPI.Hubs.Clients.Interfaces;
using Core.WebAPI.Hubs.Clients.Messages;

namespace Core.WebAPI.Hubs
{
	public class AdventureHub : Hub<IAdventureClient>
	{
		public AdventureHub()
		{
		}

		public async Task SendMessage(string user, AdventureMessage message)
		{
			await Clients.All.ReceiveMessage(user, message);
		}

		public Task SendMessageToCaller(AdventureMessage message)
		{
			return Clients.Caller.ReceiveMessage(message);
		}
	}
}
