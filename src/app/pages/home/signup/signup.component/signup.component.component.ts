import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup.component',
  imports: [CommonModule, FormsModule, RouterLink],
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

  onSubmit() {
    console.log('Form Data:', this.formData);
  }
}
