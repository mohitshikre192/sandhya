import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { login } from '../../models/login';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  model: login = { Username: '', Password: '' };
  constructor(
    private fb: FormBuilder, private toast: ToastrService, private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.model.Username = this.loginForm.get('username')?.value;
      this.model.Password = this.loginForm.get('password')?.value;
      this.toast.success('Login Success', 'Success');

      this.router.navigate(['/']);
    }
  }
}
