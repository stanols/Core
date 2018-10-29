using System.Threading.Tasks;
using Core.WebAPI.Hubs.Messages;

namespace Core.WebAPI.Hubs.Clients.Interfaces
{
	public interface IChartClient
	{
		Task ReceiveMessage(string user, ChatMessage message);
		Task ReceiveMessage(ChatMessage message);
	}
}
