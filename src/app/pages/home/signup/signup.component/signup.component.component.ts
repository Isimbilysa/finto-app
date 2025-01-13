import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signup.component',
  imports: [CommonModule, FormsModule, RouterLink, ToastModule, ButtonModule],
  providers: [MessageService],
  templateUrl: './signup.component.component.html',
  styleUrl: './signup.component.component.css'
})
export class SignupComponent {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  constructor (private messageService: MessageService) {}
  show() {
    console.log("Toast trigger!");
    
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message sent successfully!',
    });
  }
  onSubmit() {
    console.log('Form Data:', this.formData);
  }
}
