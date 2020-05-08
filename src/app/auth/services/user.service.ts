import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  constructor(private http: HttpClient) {}

  postUser(dto: PostUserDTO): Observable<PostUserResponse> {
    return this.http.post<PostUserResponse>('http://localhost:3333/users', dto);
  }
}
