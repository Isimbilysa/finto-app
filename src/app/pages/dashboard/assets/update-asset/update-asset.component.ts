import { Component, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { DatePickerModule } from 'primeng/datepicker';
import { PortfolioService } from '../../portfolio/services/portfolio.service';
import { AnyAaaaRecord } from 'dns';
import { Portfolio } from '../../../../shared/types/portfolio';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { AssetService } from '../service/asset.service';
import { Asset } from '../../../../shared/types/asset';
@Component({
  selector: 'app-update-asset',
  imports: [
    ButtonModule,
    DialogModule,
    CommonModule,
    FormsModule,
    DropdownModule,
    DatePickerModule,
    ToastModule,
  ],
  templateUrl: './create-asset.component.html',
})
export class UpdateAssetComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private assetService: AssetService,
    private messageService: MessageService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.categoryOptions = this.categories.map((category) => ({
      label: category, // The display label
      value: category, // The actual value
    }));
  }
  asset: Asset = {
    id: '',
    name: '',
    description: '',
    marketValue: 0,
    assetType: '',
    assetStatus: '',
    portfolio: {
      id: '',
      name: '',
      category: '',
      description: '',
      createdAt: '',
    },
  };
  ngOnInit(): void {
    this.assetService.getAssets().subscribe({
      next: (data) => {
        this.asset = data;
      },
      error: (err) => {
        console.error('Failed to fetch assets:', err);
      },
    });
  }
  assetId = '';

  portfolios: { label: string; value: number }[] = [];
  selectedPortfolioId: number | null = null;
  private baseUrl: string = 'http://localhost:9000/api/v1/assets';
  visible = true;
  toggleDialog() {
    this.visible = !this.visible;
  }

  categoryOptions: { label: string; value: string }[] = [];

  categories = ['REAL_ESTATE', 'BUSINESS', 'STOCK', 'CRYPTOCURRENCY'];

  onSubmit() {
    if (this.asset.name && this.asset.assetType && this.asset.description) {
      this.assetService.editAsset(this.asset, this.assetId).subscribe({
        next: (response) => {
          console.log('Asset registered successfully:', response);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Asset created successfully!',
          });
          this.visible = false;
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
    } else {
      //   this.messageService.add({
      //     severity: 'warn',
      //     summary: 'Validation Warning',
      //     detail: 'Please fill in all fields before submitting.',
      //   });
    }
  }

  onCancel() {
    // Reset or close the form
    console.log('Registration canceled');
  }
  isBrowser: boolean;
}
