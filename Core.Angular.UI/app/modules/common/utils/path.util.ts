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

export function getQueryParams(queryParams: any): string {
	if(!queryParams) {
		return "";
	}

	return Object.keys(queryParams)
		.filter(key => queryParams[key])
		.map(key => `${key}=${queryParams[key]}`)
		.join('&');
}
