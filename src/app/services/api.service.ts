import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Store } from '../model/store';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'https://my-json-server.typicode.com/james-delivery/frontend-challenge/establishments';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData (): Observable<Store[]> {
    return this.http.get<Store[]>(apiUrl);
  }

  getStore(id: string): Observable<Store> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Store>(url);
  }

   updateStore(store: Store) {
    const url = `${apiUrl}/${store.id}`;
    return this.http.put(url, store, httpOptions);
  }
}
