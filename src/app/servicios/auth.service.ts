import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://127.0.0.1:8000/api';



  constructor(private http: HttpClient) { }

  showusers(user: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/students/{id}`, user);
  }
}
