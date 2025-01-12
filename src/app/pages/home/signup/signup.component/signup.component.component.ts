import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signup.component',
  imports: [CommonModule, FormsModule],
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
