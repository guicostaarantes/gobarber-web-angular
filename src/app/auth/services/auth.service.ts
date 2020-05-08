import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { IAuthState } from 'src/app/store/auth.state';
import * as AuthActions from 'src/app/store/auth.actions';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiBaseUrl = environment.apiBaseUrl;
  constructor(
    private http: HttpClient,
    private store: Store<{ auth: IAuthState }>
  ) {}

  async authenticate(email: string, password: string): Promise<void> {
    const { token } = await this.http
      .post<{ token: string }>(`${this.apiBaseUrl}/sessions`, {
        email,
        password,
      })
      .toPromise();
    const { fullName } = await this.http
      .get<{ fullName: string }>(`${this.apiBaseUrl}/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .toPromise();
    this.store.dispatch(new AuthActions.SignIn({ name: fullName, token }));
  }
}
