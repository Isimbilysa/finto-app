import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { Asset } from '../../../../shared/types/asset';
import { DropdownModule } from 'primeng/dropdown';
import { DatePicker } from 'primeng/datepicker';
import { PortfolioService } from '../../portfolio/services/portfolio.service';
import { Portfolio } from '../../../../shared/types/portfolio';

@Component({
  selector: 'app-update-portfolio',
  imports: [ButtonModule, FormsModule, DialogModule, CommonModule, DropdownModule],
  templateUrl: './update-portfolio.component.html',
  styleUrl: './update-portfolio.component.css',
})
export class UpdatePortfolioComponent implements OnInit {
  @Input() portfolio! : any;
  visible = false;
  isBrowser: boolean = false;
  selectedPortfolioId: number | null = null;
  categories = ['BUSINESS', 'INVESTMENT', 'RETIREMENT'];
  categoryOptions: { label: string; value: string }[] = [];

  toggleDialog() {
    this.visible = !this.visible;
  }
  onCancel() {
    this.visible = false;
  }
  portfolios: { label: string; value: number }[] = [];
  

  onSubmit() {
    this.portfolioService.editPortfolio(this.portfolio, this.portfolio.id).subscribe({
      next: () => {
        console.log('Asset updated successfully');
        this.visible = false;
      },
      error: (error) => {
        console.error('Error updating asset:', error);
      },
    })
  }
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private portfolioService : PortfolioService) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.categoryOptions = this.categories.map((category) => ({
      label: category,
      value: category, 
    }));
  }
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
    throw new Error('Method not implemented.');
  }
}
