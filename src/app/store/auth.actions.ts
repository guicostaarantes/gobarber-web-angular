import { Action } from '@ngrx/store';
import { IAuthState } from './auth.state';

export const SIGN_IN = 'Sign in';
export const SIGN_OUT = 'Sign out';

export class SignIn implements Action {
  readonly type = SIGN_IN;

  constructor(public payload: IAuthState) {}
}

export class SignOut implements Action {
  readonly type = SIGN_OUT;

  constructor() {}
}

export type Actions = SignIn | SignOut;
