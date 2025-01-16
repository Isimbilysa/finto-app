import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { SideNavComponent } from '../../../../common/navigation/side-nav/side-nav.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import {DatePickerModule} from 'primeng/datepicker';
import { ToastModule } from 'primeng/toast';


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
  visible = true;
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
