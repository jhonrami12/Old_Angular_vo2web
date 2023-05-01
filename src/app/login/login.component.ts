import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from '../shared/services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formLogin: FormGroup;

  get invalidEmail() {
    return this.formLogin.get('email');
  }

  get invalidPassword() {
    return this.formLogin.get('password');
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loadingService: LoadingService
  ) {
    this.initForm();
  }

  register() {
    this.router.navigate(['/register']);
  }

  login() {
    console.log('login', this.formLogin.getRawValue());
    this.loadingService.start();
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
      this.loadingService.end();
    }, 3000);
  }

  private initForm() {
    this.formLogin = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
  }
}
