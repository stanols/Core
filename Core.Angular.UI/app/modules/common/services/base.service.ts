import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { buildUrl } from "../utils/path.util";

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
		this._httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				// Authorization: 'my-auth-token'
			})
		};
	}

	public get<T>(
		data?: any,
		cancellationNotifier?: Observable<void>
	): Observable<T> {
		let request = this._httpClient.get<T>(buildUrl(this._basePath, data));

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
		let request = this._httpClient.post<T>(
			buildUrl([this._basePath, path].join("/")),
			data);

		if(cancellationNotifier) {
			request.pipe(takeUntil(cancellationNotifier));
		}

		return request;
	}

	public put<T>(
		data: object,
		cancellationNotifier?: Observable<void>
	): Observable<T> {
		let request = this._httpClient.put<T>(buildUrl(this._basePath), data);

		if(cancellationNotifier) {
			request.pipe(takeUntil(cancellationNotifier));
		}

		return request;
	}

	public remove<T>(
		data: object,
		cancellationNotifier?: Observable<void>
	): Observable<T> {
		let request = this._httpClient.delete<T>(buildUrl(this._basePath, data));

		if(cancellationNotifier) {
			request.pipe(takeUntil(cancellationNotifier));
		}

		return request;
	}
}