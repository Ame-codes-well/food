import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  standalone: false,
  styleUrl: './signup.css',
  templateUrl: './signup.html',
})
export class Signup {
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  readonly signupForm = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    terms: [false, Validators.requiredTrue],
  });

  submitted = false;
  successMessage = '';

  get nameControl() {
    return this.signupForm.controls.name;
  }

  get emailControl() {
    return this.signupForm.controls.email;
  }

  get passwordControl() {
    return this.signupForm.controls.password;
  }

  get termsControl() {
    return this.signupForm.controls.terms;
  }

  onSubmit(): void {
    this.submitted = true;
    this.successMessage = '';

    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    this.authService.login();
    this.router.navigate(['/home']);
  }
}
