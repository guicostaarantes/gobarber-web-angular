import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { IconsModule } from '../icons/icons.module';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignInFormComponent,
    SignUpComponent,
    SignUpFormComponent,
    InputComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    IconsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule,
  ],
})
export class AuthModule {}
