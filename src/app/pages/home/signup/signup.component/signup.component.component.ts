import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { UserServiceService } from '../../../../core/user/user-service.service';
import { User } from '../../../../shared/types/user';

@Component({
  selector: 'app-signup.component',
  imports: [CommonModule, FormsModule, RouterLink, ToastModule, ButtonModule],
  providers: [MessageService],
  templateUrl: './signup.component.component.html',
  styleUrl: './signup.component.component.css',
})
export class SignupComponent {
  constructor(
    private messageService: MessageService,
    private userService: UserServiceService
  ) {}
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  newUser: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'user',
  };

  onSubmit() {
    this.newUser.email = this.formData.email;
    this.newUser.firstName = this.formData.firstName;
    this.newUser.lastName = this.formData.lastName;
    this.newUser.password = this.formData.password;
    this.userService
      .createUser(this.newUser)
      .pipe()
      .subscribe({
        next: (response) => {
          console.log('User created successfully:', response);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Account registered successfully, welcome!',
          });
        },
        error: (error) => {
          console.error('Error creating user:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error creating user!',
            detail: error.error.message,
          });
        },
      });
  }
}
