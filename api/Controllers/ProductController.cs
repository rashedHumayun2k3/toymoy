using Ec.Api.Exceptions;
using Ec.Api.Models;
using Ec.Business.Dto.Response;
using Ec.Business.Managers;
using Ec.Worker.Jobs;
using Hangfire;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Data.SqlClient;
using System.Net;

namespace Ec.Api.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ProductController : ControllerBase
	{
		readonly IProductManager _productManager;
		readonly ILogger<ProductController> _logger;
		readonly INotificationJob _notificationJob;
		public ProductController (IProductManager productManager, ILogger<ProductController> logger, INotificationJob notificationJob)
		{
			_productManager = productManager;
			_logger = logger;
			_notificationJob = notificationJob;
		}

		//[HttpGet("{id}")]
		//[ProducesResponseType(typeof(Business.Dto.Response.ProductDto), 200)]
		//[ProducesResponseType(404)]
		//public async Task<ApiResponse<ProductDto>> Get(int id)
		//{


		//	_logger.LogDebug("LogError LogDebug.");
		//	_logger.LogInformation("Information loggin.");
		//	_logger.LogWarning("LogWarning");
		//	_logger.LogError("LogError loggin.");
		//	var response = new ApiResponse<ProductDto>();

		//	//try
		//	//{
		//	//	var data = await _productManager.GetProductById(id);
		//	//	response.Success = true;
		//	//	response.Result = data;
		//	//}
		//	//catch (Exception ex)
		//	//{
		//	//	response.Success = false;
		//	//	response.Message = ex.Message;
		//	//	//Logger.Instance.Error("Exception:", ex);
		//	//}
		//	var data = await _productManager.GetProductById(id);
		//	response.Success = true;
		//	response.Result = data;
		//	return response;
		//}
		//Rashed Maruf
		[HttpGet("{id}")]
		[ProducesResponseType(typeof(ProductDto), 200)]
		[ProducesResponseType(404)]
		public async Task<IActionResult> Get(int id)
		{
			//BackgroundJob.Enqueue(() => _notificationJob.SendWelcomeEmail("ahammedmaroof@gmail.com"));
			//throw new HttpResponseException("Customer Name cannot be empty");
			//if (id <= 0)
			//	//return NotFound("Id not found");
			//	return Problem("Id not found.", statusCode: StatusCodes.Status404NotFound);

			return Ok(await _productManager.GetProductById(id));
		}
		[HttpPost]
		[ProducesResponseType(typeof(ProductDto), 200)]
		public async Task<IActionResult> Post([FromBody] ProductDto product)
		{
			var result = await _productManager.InsertProduct(product);
			return Ok(result);
		}
	}
}
