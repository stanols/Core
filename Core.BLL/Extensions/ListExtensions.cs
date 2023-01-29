using System;
using System.Collections.Generic;
using System.Data;
using System.Reflection;

namespace Core.BLL.Extensions
{
	public static class ListExtensions
	{
		public static DataTable ToDataTable<T>(this IList<T> items)
		{
			var table = new DataTable(typeof(T).Name);

			var props = typeof(T).GetProperties(BindingFlags.Public | BindingFlags.Instance);

			foreach (var prop in props)
			{
				var propertyType = GetCoreType(prop.PropertyType);
				table.Columns.Add(prop.Name, propertyType);
			}

			foreach (var item in items)
			{
				var values = new object[props.Length];

				for (int i = 0; i < props.Length; i++)
				{
					values[i] = props[i].GetValue(item, null);
				}

				table.Rows.Add(values);
			}

			return table;
		}

		private static Type GetCoreType(Type propertyType)
		{
			return propertyType;
		}
	}
}
