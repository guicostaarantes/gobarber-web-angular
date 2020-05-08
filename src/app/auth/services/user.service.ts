import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

interface PostUserDTO {
  fullName: string;
  email: string;
  password: string;
}

interface PostUserResponse {
  id: string;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiBaseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  postUser(dto: PostUserDTO): Observable<PostUserResponse> {
    return this.http.post<PostUserResponse>(`${this.apiBaseUrl}/users`, dto);
  }
}
