import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { PortfolioService } from '../services/portfolio.service';
import { MessageService } from 'primeng/api'; // Optional for notifications
import { ToastModule } from 'primeng/toast';

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
  styleUrl: './create-portfolio.component.css',
})
export class CreatePortfolioComponent {
  visible = false;
  asset = {
    name: '',
    category: null,
    description: '',
  };
  categories = [];
  isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private portfolioService: PortfolioService,
    private messageService: MessageService // Optional for notifications
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.loadCategories();
  }

  toggleDialog() {
    this.visible = !this.visible;
  }

  loadCategories() {
    this.portfolioService.getCategories().subscribe({
      next: (response) => {
        this.categories = response;
        console.log('Categories loaded:', this.categories);
      },
      error: (error) => {
        console.error('Failed to load categories:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to load categories',
        });
      },
    });
  }

  onSubmit() {
    if (this.asset.name && this.asset.category && this.asset.description) {
      this.portfolioService.registerAsset(this.asset).subscribe({
        next: (response) => {
          console.log('Asset registered successfully:', response);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Asset registered successfully!',
          });
          this.toggleDialog(); // Close dialog
        },
        error: (error) => {
          console.error('Failed to register asset:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to register asset',
          });
        },
      });
    } else {
      console.error('Form is invalid');
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        detail: 'Please fill in all required fields',
      });
    }
  }

  onCancel() {
    console.log('Registration canceled');
    this.toggleDialog();
  }
}
