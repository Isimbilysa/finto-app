import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-create-portfolio',
  imports: [
    ButtonModule,
    CommonModule,
    DialogModule,
    FormsModule,
    DropdownModule,
    ToastModule,
  ],
  templateUrl: './create-portfolio.component.html',
  styleUrls: ['./create-portfolio.component.css'],
})
export class CreatePortfolioComponent {
  visible = false;

  // asset object with value included
  asset = {
    name: '',
    category: null,
    description: '',
  };
  categoryOptions :  { label: string; value: string }[] = [];
  categories  = ['BUSINESS', 'INVESTMENT', 'RETIREMENT'];

  isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient,
    private messageService: MessageService,
    private portfolioService: PortfolioService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.categoryOptions = this.categories.map(category => ({
      label: category, // The display label
      value: category, // The actual value
    }));
  }

  toggleDialog() {
    this.visible = !this.visible;
  }

  // onSubmit method to include validation for value
  onSubmit() {
    // Ensure all fields are valid before submission
    if (this.asset.name && this.asset.category && this.asset.description) {
      const apiUrl = 'http://localhost:9000/api/v1/portfolios';

      this.portfolioService.registerPortfolio(this.asset).subscribe({
        next: (response) => {
          console.log('Asset registered successfully:', response);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Portfolio created successfully!',
          });
          this.visible = false; // Close the dialog
        },
        error: (error) => {
          console.error('Error registering asset:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to register the portfolio. Please try again.',
          });
        },
      });

      // Perform the HTTP POST request to register the asset
    } else {
      //   this.messageService.add({
      //     severity: 'warn',
      //     summary: 'Validation Warning',
      //     detail: 'Please fill in all fields before submitting.',
      //   });
    }
  }
}
