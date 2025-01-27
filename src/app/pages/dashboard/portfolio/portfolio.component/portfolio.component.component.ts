import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from '../../../../common/navigation/side-nav/side-nav.component';
import { CreatePortfolioComponent } from '../create-portfolio/create-portfolio.component';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { PortfolioService } from '../services/portfolio.service';
import { Portfolio } from '../../../../shared/types/portfolio';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { UpdatePortfolioComponent } from '../update-portfolio/update-portfolio.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio-component',
  templateUrl: './portfolio.component.component.html',
  styleUrls: ['./portfolio.component.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    SideNavComponent,
    CreatePortfolioComponent,
    ButtonModule,
    ToastModule,
    FormsModule,
    UpdatePortfolioComponent,
    RouterModule,
  ],
})
export class PortfolioComponentComponent {
  constructor(
    private portfolioService: PortfolioService,
    private messageService: MessageService
  ) {}
  portfolios: Portfolio[] = [];
  searchTerm: string = '';
  Math = Math;
  totalItems = this.portfolios?.length;
  pageSize = 5;
  currentPage = 0;
  pageCount: number = 0;
  filter : string = '';

  setFilter(value: string){
    this.filter = value;
    this.currentPage = 0;
    this.loadPortfolios();
  }

  get totalPages(): number[] {
    this.pageCount = Math.ceil(
      this.totalItems ? this.totalItems / this.pageSize : 0
    );
    return Array.from({ length: this.pageCount }, (_, index) => index);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadPortfolios();
    console.log(`Current Page: ${page + 1}`);
  }

  loadPortfolios(): void {
    this.portfolioService
      .getPortfoliosPaginated(this.currentPage, this.pageSize, this.searchTerm, this.filter)
      .subscribe({
        next: (data) => {
          this.portfolios = data.content;
          this.totalItems = data.totalElements;
          this.pageCount = data.totalPages;
        },
        error: (err) => {
          console.error('Failed to fetch portfolios:', err);
        },
      });
  }

  search(): void {
    this.currentPage = 0;
    this.loadPortfolios();
  }

  ngOnInit(): void {
    this.loadPortfolios();
  }

  delete(id: string) {
    this.portfolioService.deleteAsset(id).subscribe({
      next: (data) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Portfolio deleted successfully!',
        });
        this.loadPortfolios();
      },
      error: (err) => {
        
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.message,
        });
      },
    });
  }
}
