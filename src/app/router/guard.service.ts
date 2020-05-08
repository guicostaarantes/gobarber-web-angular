import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAuthState } from '../store/auth.state';

@Injectable()
export class AuthGuardService implements CanActivate {
  token: Observable<string>;
  loggedIn: boolean;

  constructor(
    private store: Store<{ auth: IAuthState }>,
    private router: Router
  ) {
    this.token = this.store.select((state) => state.auth.token);
    this.token.subscribe((token) => {
      this.loggedIn = token !== '';
    });
  }

  canActivate(): boolean {
    if (!this.loggedIn) {
      this.router.navigate(['sign-in']);
      return false;
    }
    return true;
  }
}

@Injectable()
export class AuthOppositeGuardService implements CanActivate {
  token: Observable<string>;
  loggedIn: boolean;

  constructor(
    private store: Store<{ auth: IAuthState }>,
    private router: Router
  ) {
    this.token = this.store.select((state) => state.auth.token);
    this.token.subscribe((token) => {
      this.loggedIn = token !== '';
    });
  }

  canActivate(): boolean {
    if (this.loggedIn) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
