import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudGenericService {
  baseUrl = environment.apiBaseUrl;
  controller: string;
  constructor(private http: HttpClient, controller: string) {
    this.baseUrl += `/${controller}/`;
  }

  public getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`)
      .pipe(
        map((data) => {
          return data;
        }, (err) => {
          console.log('An error occured', err);
        })
      );
  }

}
