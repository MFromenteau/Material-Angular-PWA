import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudGenericService {
  apiUrl = environment.apiBaseUrl;
  controller: string;
  constructor(controller: string) {
    this.apiUrl += `/${controller}/`;
  }
}
