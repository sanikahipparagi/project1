import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  employeeId:string='';
  otp:String='';
  mockotp:string='';
  loginError: string='';
  employeeIdError: string = '';

  constructor(private router: Router) {}

  generateOtp() {
   
    if (!this.employeeId || this.employeeId.trim() === '') {
      this.employeeIdError = 'Employee ID is required to generate OTP.';
      return; 
    } else {
      this.employeeIdError = ''; // Clear any previous error
      this.mockotp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a mock OTP
      console.log('Mock OTP:', this.mockotp);
    }
  }
  
  onLogin() {
    if (!this.employeeId || !this.otp) {
      this.loginError = 'Employee ID and OTP are required.';
    } else if (this.otp === this.mockotp) {  // Validate OTP
      this.loginError = ''; // Clear error message
      // Redirect to the dashboard upon successful login
      this.router.navigate(['/dashboard']);  // Navigate to the dashboard
    } else {
      this.loginError = 'Invalid OTP.';
    }
  }
}
