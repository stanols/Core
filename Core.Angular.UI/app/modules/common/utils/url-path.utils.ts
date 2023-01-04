import { environment } from "environments/environment";

export function combineUrl(
	url: string,
	data: any = null
): string {
	let requestData = "";

	if(data) {
		if(typeof data === "object") {
			requestData = `?request=${encodeURIComponent(JSON.stringify(data))}`;
		} else {
			requestData = `/${data as string}`;
		}
	}

	return `${environment.apiUrl}/${url}${requestData}`;
}

export function format(
	value: number,
	style: string,
	maximumFractionDigits?: number,
	notation?: string,
	compactDisplay?: string
) {
	const locale = 'en-US';
	const formatterConfig = {
		style,
		currency: 'USD',
		currencySign: 'accounting',
		maximumFractionDigits,
		notation,
		compactDisplay
	} as Intl.NumberFormatOptions;

	const formatter = new Intl.NumberFormat(locale, formatterConfig);
	const formattedValue = formatter.format(value);

	return formattedValue;
}

export function getQueryParamsFromObject(queryParams: any): string {
	if(!queryParams) {
		return "";
	}

	return Object.keys(queryParams)
		.filter(key => queryParams[key])
		.map(key => `${key}=${queryParams[key]}`)
		.join('&');
}
