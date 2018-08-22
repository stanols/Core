using System;
using Core.DAL;
using Microsoft.EntityFrameworkCore;

namespace Core.Database
{
    static class Program
    {
        static void Main(string[] args)
        {
	        try
	        {
		        var options = new DbContextOptions<CoreDbContext>();
				var context = new CoreDbContext(options);

		        context.Database.Migrate();

		        Console.WriteLine("Hello World!");
		        Console.ReadLine();
	        }
	        catch (Exception exception)
	        {
		        Console.WriteLine("Message: {0} InnerException: {1}", exception.Message, exception.InnerException);
		        Console.ReadLine();
	        }
        }
    }
}
