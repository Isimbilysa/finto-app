import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from '../../../../common/navigation/side-nav/side-nav.component';
import { CreatePortfolioComponent } from '../create-portfolio/create-portfolio.component';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-portfolio-component',
  templateUrl: './portfolio.component.component.html',
  styleUrls: ['./portfolio.component.component.css'],
  standalone: true,
  imports: [CommonModule,SideNavComponent, CreatePortfolioComponent, ButtonModule], 
})
export class PortfolioComponentComponent {
  users = [
    {
      avatar: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
      name: 'Angelique Morse',
      email: 'benny89@yahoo.com',
      phone: '+46 8 123 456',
      company: 'Wuckert Inc',
      role: 'Content Creator',
      status: 'Banned',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
      name: 'Ariana Lang',
      email: 'avery43@hotmail.com',
      phone: '+54 11 1234-5678',
      company: 'Feest Group',
      role: 'IT Administrator',
      status: 'Pending',
    },
  ];
}
