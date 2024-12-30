﻿using Ec.Api.Exceptions;
using Ec.Api.Models;
using Ec.Business.Dto.Response;
using System.Net;
using System.Text.Json;
using KeyNotFoundException = Ec.Api.Exceptions.KeyNotFoundException;
using NotImplementedException = Ec.Api.Exceptions.NotImplementedException;
using UnauthorizedAccessException = Ec.Api.Exceptions.UnauthorizedAccessException;

namespace Ec.Api.CustomMiddlewares
{
	public class ExceptionHandlingMiddleware
	{
		private readonly RequestDelegate _next;
		private readonly ILogger<ExceptionHandlingMiddleware> _logger;
		public ExceptionHandlingMiddleware(RequestDelegate next, ILogger<ExceptionHandlingMiddleware> logger)
		{
			_next = next;
			_logger = logger;
		}
		public async Task InvokeAsync(HttpContext httpContext)
		{
			try
			{
				await _next(httpContext);
			}
			catch (Exception ex)
			{
				await HandleExceptionAsync(httpContext, ex);
			}
		}
		private async Task HandleExceptionAsync(HttpContext context, Exception exception)
		{
			//var response = new ApiResponse<object>();
			HttpStatusCode status;
			//var stackTrace = String.Empty;
			string message;
			var exceptionType = exception.GetType();
			if (exceptionType == typeof(BadRequestException))
			{
				message = exception.Message;
				status = HttpStatusCode.BadRequest;
				//stackTrace = exception.StackTrace;
			}
			else if (exceptionType == typeof(NotFoundException))
			{
				status = HttpStatusCode.NotFound;
				message = exception.Message;
			}
			else if (exceptionType == typeof(NotImplementedException))
			{
				status = HttpStatusCode.NotImplemented;
				message = exception.Message;
			}
			else if (exceptionType == typeof(UnauthorizedAccessException))
			{
				status = HttpStatusCode.Unauthorized;
				message = exception.Message;
			}
			else if (exceptionType == typeof(KeyNotFoundException))
			{
				status = HttpStatusCode.Unauthorized;
				message = exception.Message;
			}
			else if (exceptionType == typeof(System.ArgumentNullException))
			{
				status = HttpStatusCode.InternalServerError;
				message = exception.Message;
			}
			else if (exceptionType == typeof(HttpResponseException))
			{
				status = HttpStatusCode.BadRequest;
				message = exception.Message;
			}
			else
			{
				status = HttpStatusCode.InternalServerError;
				message = "Somthing bad happend!";
			}
			var exceptionResult = JsonSerializer.Serialize(new
			{
				//error = exception.Message,
				//stackTrace
				//success = false,
				detail = message
			});

			_logger.LogError("Message: "+ exception.Message + ". stackTrace" + exception.StackTrace);
			context.Response.ContentType = "application/json";
			context.Response.StatusCode = (int)status;
			await context.Response.WriteAsync(exceptionResult);
		}
	}
}
