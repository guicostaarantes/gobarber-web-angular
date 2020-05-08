import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAuthState } from 'src/app/store/auth.state';
import * as AuthActions from 'src/app/store/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  fullName: Observable<string>;
  constructor(
    private router: Router,
    private store: Store<{ auth: IAuthState }>
  ) {}

  ngOnInit(): void {
    this.fullName = this.store.select((state) => state.auth.fullName);
  }

  signOut() {
    this.store.dispatch(new AuthActions.SignOut());
    this.router.navigate(['/sign-in']);
  }
}
