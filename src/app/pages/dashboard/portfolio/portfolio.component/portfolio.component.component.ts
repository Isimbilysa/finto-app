import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from '../../../../common/navigation/side-nav/side-nav.component';
import { CreatePortfolioComponent } from '../create-portfolio/create-portfolio.component';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { PortfolioService } from '../services/portfolio.service';
import { Portfolio } from '../../../../shared/types/portfolio';
@Component({
  selector: 'app-portfolio-component',
  templateUrl: './portfolio.component.component.html',
  styleUrls: ['./portfolio.component.component.css'],
  standalone: true,
  imports: [CommonModule,SideNavComponent, CreatePortfolioComponent, ButtonModule,ToastModule ], 
})
export class PortfolioComponentComponent {
  constructor(private portfolioService: PortfolioService){}
    portfolios: Portfolio[] | null = null;
  
  ngOnInit(): void {
    this.portfolioService.getPortfolios().subscribe({
      next: (data) => {
        this.portfolios = data; 
        console.log('Assets loaded:', this.portfolios);
      },
      error: (err) => {
        console.error('Failed to fetch assets:', err);
      },
    });
  }
}
