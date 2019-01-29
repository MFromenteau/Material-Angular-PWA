import { Injectable } from '@angular/core';
import { CrudGenericService } from '../CrudGeneric/crud-generic.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudGenericService {

  constructor(http: HttpClient) {
    super(http, 'user');
  }
}
