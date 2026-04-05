import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule, RouterLink],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  confirmPassword = '';
  showPassword = false;
  showConfirm = false;
  acceptTerms = false;
}
