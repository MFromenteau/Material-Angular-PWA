import { Injectable } from '@angular/core';
import { CrudGenericService } from '../CrudGeneric/crud-generic.service';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudGenericService {

  constructor(http: Http) {
    super(http, 'user');
  }
}
