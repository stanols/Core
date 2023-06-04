import { Injectable } from "@angular/core";
import { CrudService } from 'ngx-crud';
import { RequestBody } from "../models/request-body.model";
import { ResponseBody } from "../models/response-body.model";

@Injectable()
export class BaseCrudService extends CrudService<RequestBody, ResponseBody>
{
}
