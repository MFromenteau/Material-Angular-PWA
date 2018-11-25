import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudGenericService {
  apiUrl = '';
  controller: string;
  constructor(controller: string) {
    this.apiUrl += `/${controller}/`;
  }
}
