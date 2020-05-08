import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.sass'],
})
export class SignInFormComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
    });
  }

  submitSignInForm(): void {
    const { email, password } = this.signInForm.value;
    this.authService.authenticate(email, password);
  }
}
