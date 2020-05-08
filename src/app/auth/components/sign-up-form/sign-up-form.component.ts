import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.sass'],
})
export class SignUpFormComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      fullName: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null),
      confirmPassword: new FormControl(null),
    });
  }

  submitSignUpForm(): void {
    const { fullName, email, password } = this.signUpForm.value;
    this.userService.postUser({ fullName, email, password }).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
