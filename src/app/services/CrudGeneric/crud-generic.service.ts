import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { environment } from './../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CrudGenericService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private http: Http, controller: string) {
    this.baseUrl += `/${controller}`;
  }

  public getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`)
      .pipe(
        map((data) => {
          return data.json();
        },(err) => {
          console.log('An error occured', err);
        })
      )
  }

}
