import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-nav.component.html',
  imports: [RouterLink, CommonModule],
})
export class SideNavComponent {
  // Sidebar menu items
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
    },
    { label: 'Calendar', icon: 'users', link: '/team' },
    { label: 'Trends', icon: 'envelope', link: '/messages', badge: 3 },
    { label: 'Market', icon: 'calendar', link: '/calendar' },
    { label: 'Settings', icon: 'cog', link: '/settings' },
  ];
  user = {
    name: 'Amy Elsner',
    profileImage:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  };

  // Toggle submenu visibility
  toggleSubmenu(item: any) {
    item.expanded = !item.expanded;
  }
}
