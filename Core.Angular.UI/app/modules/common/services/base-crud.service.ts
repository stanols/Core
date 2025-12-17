import { Injectable } from "@angular/core";
//import { CrudService } from "ngx-simple-crud";
import { RequestBody } from "../models/request-body.model";
import { ResponseBody } from "../models/response-body.model";
import { HttpClient } from "@microsoft/signalr";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class BaseCrudService<T> //extends CrudService<RequestBody, ResponseBody>
{
	constructor(protected http: HttpClient, protected baseUrl: string) {

	}

	// getAll(): Observable<T[]> {
	// 	return this.http.get<T[]>(this.baseUrl); 
	// }

	// get(id: number): Observable<T> { return this.http.get<T>(`${this.baseUrl}/${id}`); }
	// create(item: T): Observable<T> { return this.http.post<T>(this.baseUrl, item); }
	// update(id: number, item: T): Observable<T> { return this.http.put<T>(`${this.baseUrl}/${id}`, item); }
	// delete(id: number): Observable<void> { return this.http.delete<void>(`${this.baseUrl}/${id}`); }
}
