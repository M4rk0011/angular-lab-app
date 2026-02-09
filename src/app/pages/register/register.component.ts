import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  countries = ['Philippines', 'United States', 'Canada', 'Australia', 'Japan', 'Singapore'];
  accountTypes = ['Personal', 'Business', 'Student'];
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.initializeForm();
  }
  
  initializeForm(): void {
    this.registrationForm = this.fb.group({
      // Text inputs
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      
      // Email input
      email: ['', [Validators.required, Validators.email]],
      
      // Password input
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      
      // Number input
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      
      // Date input
      dateOfBirth: ['', [Validators.required]],
      
      // Select/dropdown
      country: ['Philippines', [Validators.required]],
      
      // Radio buttons
      accountType: ['Personal', [Validators.required]],
      
      // Checkbox
      termsAgreement: [false, [Validators.requiredTrue]]
    }, { validators: this.passwordMatchValidator });
  }
  
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
  
  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form submitted:', this.registrationForm.value);
      alert('Registration successful! Check console for data.');
      // Here you would normally send data to a server
    } else {
      this.markFormGroupTouched(this.registrationForm);
    }
  }
  
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  
  get f() {
    return this.registrationForm.controls;
  }
}