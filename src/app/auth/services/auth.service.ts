import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  postSession(email: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('http://localhost:3333/sessions', {
      email,
      password,
    });
  }
}
