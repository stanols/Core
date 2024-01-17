import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { buildUrl } from "../utils/path.util";
import { AuthorizationHelper } from "../helpers/authorization.helper";

@Injectable()
export class BaseService {
	private readonly _basePath: string;
	private readonly _httpClient: HttpClient;
	private readonly _httpOptions: any;

	constructor(
		basePath: string,
		httpClient: HttpClient
	) {
		this._basePath = basePath;
		this._httpClient = httpClient;

		let headers = {
			'Content-Type': 'application/json'
		};

		if (AuthorizationHelper.isAuthorized()) {
			const authorizationData = AuthorizationHelper.getAuthorizationData();
			const bearerToken = 'Bearer ' + authorizationData?.token;

			headers['Authorization'] = bearerToken;
		}

		this._httpOptions = {
			headers: new HttpHeaders(headers)
		};
	}

	public get<T>(
		data?: any,
		cancellationNotifier?: Observable<void>
	): Observable<T> {
		const request = this._httpClient.get<T>(
			buildUrl(this._basePath, data),
			<Object>this._httpOptions);

		if(cancellationNotifier) {
			request.pipe(takeUntil(cancellationNotifier));
		}

		return request;
	}

	public post<T>(
		path?: string,
		data?: object,
		cancellationNotifier?: Observable<void>
	): Observable<T> {
		const request = this._httpClient.post<T>(
			buildUrl([this._basePath, path].join("/")),
			data,
			<Object>this._httpOptions);

		if(cancellationNotifier) {
			request.pipe(takeUntil(cancellationNotifier));
		}

		return request;
	}

	public put<T>(
		path?: string,
		data?: object,
		cancellationNotifier?: Observable<void>
	): Observable<T> {
		const request = this._httpClient.put<T>(
			buildUrl([this._basePath, path].join("/")),
			data,
			<Object>this._httpOptions);

		if(cancellationNotifier) {
			request.pipe(takeUntil(cancellationNotifier));
		}

		return request;
	}

	public delete<T>(
		path?: string,
		id?: number,
		cancellationNotifier?: Observable<void>
	): Observable<T> {
		const request = this._httpClient.delete<T>(
			`${buildUrl([this._basePath, path].join("/"))}?id=${id}`,
			<Object>this._httpOptions);

		if(cancellationNotifier) {
			request.pipe(takeUntil(cancellationNotifier));
		}

		return request;
	}
}