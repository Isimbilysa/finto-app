import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { DatePickerModule } from 'primeng/datepicker';
@Component({
  selector: 'app-create-asset',
  imports: [
    ButtonModule,
    DialogModule,
    CommonModule,
    FormsModule,
    DropdownModule,
    DatePickerModule,
    ToastModule
  ],
  templateUrl: './create-asset.component.html',
  styleUrl: './create-asset.component.css',
})
export class CreateAssetComponent {
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
    // Reset or close the form
    console.log('Registration canceled');
  }
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
}
