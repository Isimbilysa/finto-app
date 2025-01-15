import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { LoginPayload } from '../../../shared/types/login-payload';
import { MessageService } from 'primeng/api';
import { UserServiceService } from '../../../core/user/user-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [PasswordModule, FormsModule, CommonModule, ButtonModule, ToastModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  constructor(
    private messageService: MessageService,
    private userService: UserServiceService,
    private router : Router
  ) {}
  formData = {
    email: '',
    password: '',
  };

  payload: LoginPayload = {
    username: '',
    password: '',
  };

  onSubmit() {
    this.payload.username = this.formData.email;
    this.payload.password = this.formData.password;
    this.userService
      .login(this.payload)
      .pipe()
      .subscribe({
        next: (response) => {
          console.log('User Logged In successfully, welcome!', response);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Account logged in successfully, welcome!',
          });
          this.userService.setUserContext('accessToken', response.data.accessToken);
          this.router.navigate(['/dashboard/analytics']);
        },
        error: (error) => {
          console.error('Error logging in!', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error logging in!',
            detail: error.error.message,
          });
        },
      });
  }
}
