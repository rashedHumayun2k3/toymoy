using AutoMapper;
using Ec.Business.Managers;
using Ec.Business.Managers.Implementations;
using Ec.Business.Mappers;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Ec.Data;
using Ec.Data.Repositories.Implementations;
using Ec.Data.Repositories;

namespace Ec.Business
{
	public static class Startup
	{
		public static IServiceCollection AddEcBusiness(this IServiceCollection services, IConfiguration configuration)
		{
			services.AddSingleton(provider => new MapperConfiguration(cfg =>
			{
				cfg.AddProfile<ProductMapper>();
                cfg.AddProfile<CategoryMapper>();
            }).CreateMapper());

			services.AddEcData(configuration);
			AddEcManegers(services, configuration);
			return services;
		}
		public static IServiceCollection AddEcManegers(this IServiceCollection services, IConfiguration configuration)
		{
			services.AddScoped<IProductManager, ProductManager>();
            services.AddScoped<ICategoryManager, CategoryManager>();
            return services;
		}
	}
}