using Microsoft.AspNetCore.Mvc;

namespace Core.WebApi.Controllers
{
	[Route("api/[Controller]/[Action]")]
	[ApiController]
	public abstract class BaseController : ControllerBase
	{
	}
}
