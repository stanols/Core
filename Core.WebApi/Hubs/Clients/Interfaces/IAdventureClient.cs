using System.Threading.Tasks;
using Core.WebAPI.Hubs.Messages;

namespace Core.WebAPI.Hubs.Clients.Interfaces
{
	public interface IAdventureClient
	{
		Task ReceiveMessage(string user, AdventureMessage messgae);
		Task ReceiveMessage(AdventureMessage message);
	}
}
