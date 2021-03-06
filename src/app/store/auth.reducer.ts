import * as AuthActions from './auth.actions';
import { IAuthState } from './auth.state';

const initialState: IAuthState = {
  fullName: '',
  token: '',
};

export function AuthReducer(
  state: IAuthState = initialState,
  action: AuthActions.Actions
) {
  switch (action.type) {
    case AuthActions.SIGN_IN:
      return action.payload;
    case AuthActions.SIGN_OUT:
      return initialState;
    default:
      return state;
  }
}
