using System.Threading.Tasks;
using Core.WebApi.Hubs.Clients.Messages;

namespace Core.WebApi.Hubs.Clients.Interfaces
{
	public interface IChartClient
	{
		Task ReceiveMessage(string user, ChatMessage message);
		Task ReceiveMessage(ChatMessage message);
	}
}
