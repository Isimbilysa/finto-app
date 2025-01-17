import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
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
@Component({
  selector: 'app-create-asset',
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
  styleUrl: './create-asset.component.css',
})
export class CreateAssetComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private portfolioService: PortfolioService,
    private http: HttpClient, 
    private cookieService : CookieService, 
    private messageService: MessageService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.categoryOptions = this.categories.map((category) => ({
      label: category, // The display label
      value: category, // The actual value
    }));
  }
  visible = false;
  portfolios: { label: string; value: number }[] = [];
  selectedPortfolioId: number | null = null;
  private baseUrl:string = 'http://localhost:9000/api/v1/assets'
  toggleDialog() {
    this.visible = !this.visible;
  }

  categoryOptions: { label: string; value: string }[] = [];

  asset = {
    name: '',
    asset_type: null,
    purchaseDate: null,
    description: '',
    marketValue: 0,
  };

   registerAsset(asset: any): Observable<any> {
      return this.http.post(`${this.baseUrl}?portfolio_id=${this.selectedPortfolioId}`, asset,  {
          headers: {
              'Authorization' : 'Bearer ' + this.cookieService.get('accessToken')
          }
      });
    }

  categories = ['REAL_ESTATE', 'BUSINESS', 'STOCK', 'CRYPTOCURRENCY'];
  ngOnInit(): void {
    this.portfolioService.getPortfolios().subscribe(
      (data:any) => {
        this.portfolios = data.map((portfolio:Portfolio) => ({
          label: portfolio.name, 
          value: portfolio.id, 
        }));
      },
      (error:any) => {
        console.error('Error fetching portfolios:', error);
      }
    );
  }

  onSubmit() {
    if (this.asset.name && this.asset.asset_type && this.asset.description) {
      const apiUrl = 'http://localhost:9000/api/v1/assets';

      this.registerAsset(this.asset).subscribe({
        next: (response) => {
          console.log('Asset registered successfully:', response);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Asset created successfully!',
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

  onCancel() {
    // Reset or close the form
    console.log('Registration canceled');
  }
  isBrowser: boolean;
}
