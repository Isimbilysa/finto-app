import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserServiceService } from '../../../core/user/user-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-nav.component.html',
  imports: [RouterLink, CommonModule],
})
export class SideNavComponent {
  constructor (private userService: UserServiceService,private router: Router){}
  // Sidebar menu items
  isSideNavOpen: boolean = false;

  menuItems = [
    { label: 'Analytics', icon: 'home', link: '/dashboard/analytics' },
    {
      label: 'Portfolio',
      icon: 'bookmark',
      link: '/dashboard/portfolio',
    },
    {
      label: 'Assets',
      icon: 'chart-bar',
      link: '/dashboard/assets',
      queryParams : {'portfolio': 'all'}
    },
    { label: 'Calendar', icon: 'users', link: '/team' },
    { label: 'Trends', icon: 'envelope', link: '/messages', badge: 3 },
    { label: 'Market', icon: 'calendar', link: '/calendar' },
    { label: 'Logout', icon: 'cog', link: '/settings'},
  ];
  user = {
    name: 'Amy Elsner',
    profileImage:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  };

  logout(){
    this.userService.logout();
    this.router.navigate(['/signin']);
  }
  // Toggle submenu visibility
  toggleSubmenu(item: any) {
    item.expanded = !item.expanded;
  }
  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }
}
