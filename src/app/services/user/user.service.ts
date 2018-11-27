import { Injectable } from '@angular/core';
import { CrudGenericService } from '../CrudGeneric/crud-generic.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudGenericService {

  constructor() {
    super('user');
  }
}
