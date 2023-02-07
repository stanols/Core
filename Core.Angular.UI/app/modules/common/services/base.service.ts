import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { combineUrl } from "../utils/path.util";

@Injectable()
export class BaseService {
	constructor(
		private readonly httpClient: HttpClient
	) {
	}

	public get<T>(
		url: string,
		data?: any,
		cancellationSubject?: Observable<void>
	): Observable<T> {
		let request = this.httpClient.get<T>(combineUrl(url, data));

		if(cancellationSubject) {
			request = this.applyCancellationSubject(
				request,
				cancellationSubject
			)
		}

		return request;
	}

	public post<T>(
		url: string,
		data?: object,
		cancellationSubject?: Observable<void>
	): Observable<T> {
		let request = this.httpClient.post<T>(combineUrl(url), data);

		if(cancellationSubject) {
			request = this.applyCancellationSubject(
				request,
				cancellationSubject
			)
		}

		return request;
	}

	public put<T>(
		url: string,
		data: object,
		cancellationSubject?: Observable<void>
	): Observable<T> {
		let request = this.httpClient.put<T>(combineUrl(url), data);

		if(cancellationSubject) {
			request = this.applyCancellationSubject(
				request,
				cancellationSubject
			)
		}

		return request;
	}

	public delete<T>(
		url: string,
		data: any,
		cancellationSubject?: Observable<void>
	): Observable<T> {
		let request = this.httpClient.delete<T>(combineUrl(url, data));

		if(cancellationSubject) {
			request = this.applyCancellationSubject(
				request,
				cancellationSubject
			)
		}

		return request;
	}

	private applyCancellationSubject<T>(
		request: Observable<T>,
		cancellationSubject: Observable<void>
	): Observable<T> {
		return request.pipe(takeUntil(cancellationSubject));
	}
}