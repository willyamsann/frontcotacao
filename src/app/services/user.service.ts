import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const baseUrl = 'https://localhost:44306/api/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl);
  }

  getById(id: any): Observable<User> {
    let url = `${baseUrl}/${id}`;

    return this.http.get(url);
  }

  create(data: User): Observable<User> {
    return this.http.post(baseUrl, data);
  }
/*
  update(id: any, data: any): Observable<any> {
    return this.http.put(${baseUrl}/${id}, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(${baseUrl}/${id});
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(${baseUrl}?title=${title});
  }
*/  
}
