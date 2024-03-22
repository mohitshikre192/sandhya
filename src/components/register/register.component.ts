import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      // Perform registration logic here
      console.log('Form submitted successfully');
      console.log(this.registerForm.value);
      this.router.navigate(['/auth/login']);
    } else {
      // Form is invalid
      console.error('Form is invalid');
    }
  }
}
