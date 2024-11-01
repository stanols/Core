using System.Threading.Tasks;
using Core.WebApi.Hubs.Clients.Messages;

namespace Core.WebApi.Hubs.Clients.Interfaces
{
	public interface IChatClient
	{
		Task ReceiveMessage(ChatMessage message);
	}
}
