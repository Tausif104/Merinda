import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login-alpha',
  templateUrl: './login-alpha.component.html',
  styleUrls: ['./login-alpha.component.scss']
})
export class LoginAlphaComponent implements OnInit {
  validateForm!: UntypedFormGroup;

  constructor(
    private authService: AuthService,
    private fb: UntypedFormBuilder
  ) {}

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      const { email, password } = this.validateForm.value
      this.authService.login({
        email,
        password
      })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
