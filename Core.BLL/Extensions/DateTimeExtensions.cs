using System;

namespace Core.BLL.Extensions
{
	public static class DateTimeExtensions
	{
		public static DateTime[] GetDatesArray(this DateTime fromDate, DateTime toDate)
		{
			var days = (toDate - fromDate).Days;
			var dates = new DateTime[days];

			for (int i = 0; i < days; i++)
			{
				dates[i] = fromDate.AddDays(i);
			}

			return dates;
		}
	}
}
