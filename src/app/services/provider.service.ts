import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provider } from '../models/provider.model';


const baseUrl = 'https://localhost:44306/api/Provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Provider[]> {
    let url = baseUrl;
    return this.http.get<Provider[]>(url);
  }

  getById(id: any): Observable<Provider> {
    let url = `${baseUrl}/${id}`;

    return this.http.get(url);
  }

  create(data: Provider): Observable<Provider> {
    return this.http.post(baseUrl, data);
  }

  deleteById(id: any): Observable<Provider>{
    let url = `${baseUrl}/${id}`;

    return this.http.delete(url);
  }
}
