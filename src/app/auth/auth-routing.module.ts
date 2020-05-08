import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthOppositeGuardService } from '../router/guard.service';

const routes: Routes = [
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [AuthOppositeGuardService],
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    canActivate: [AuthOppositeGuardService],
  },
];

@NgModule({
  providers: [AuthOppositeGuardService],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
