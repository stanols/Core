import { Injectable } from "@angular/core";
import {
	HttpErrorResponse,
	HttpEvent,
	HttpEventType,
	HttpHandler,
	HttpInterceptor,
	HttpRequest
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { PopupComponent } from "app/modules/common/components/popup/popup.component";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	constructor(
		private readonly modalService: NgbModal
	) {
	}

	public intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return next.handle(request)
			.pipe(
				map((httpEvent: HttpEvent<any>) => {
					const contentTypeHeaderKey = "content-type";
					const jsonContentType = "application/json";

					return httpEvent;
				}),
				catchError((errorResponse: HttpErrorResponse) => {
					console.log(request.url, errorResponse);

					const ngModalOptions = {
						size: 'lg',
					} as NgbModalOptions;
					this.modalService.open(
						PopupComponent,
						ngModalOptions
					)

					return throwError(errorResponse.message);
				})
			)
	}
}
