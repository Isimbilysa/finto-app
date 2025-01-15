import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-create-portfolio',
  imports: [ButtonModule, CommonModule, DialogModule, FormsModule, DropdownModule],
  templateUrl: './create-portfolio.component.html',
  styleUrl: './create-portfolio.component.css'
})
export class CreatePortfolioComponent {
  visible = false;
  toggleDialog() {
    this.visible = !this.visible;
  }
  asset = {
    name: '',
    category: null,
    purchaseDate: null,
    serialNumber: '',
    value: null,
  };

  categories = [
    { name: 'Electronics', code: 'EL' },
    { name: 'Furniture', code: 'FR' },
    { name: 'Vehicles', code: 'VE' },
    { name: 'Others', code: 'OT' },
  ];

  onSubmit() {
    if (
      this.asset.name &&
      this.asset.category &&
      this.asset.purchaseDate &&
      this.asset.value
    ) {
      console.log('Asset registered successfully:', this.asset);
    } else {
      console.error('Form is invalid');
    }
  }

  onCancel() {
    console.log('Registration canceled');
  }
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
}
