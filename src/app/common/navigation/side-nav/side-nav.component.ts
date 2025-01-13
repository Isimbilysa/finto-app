import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-nav.component.html',
  imports : [RouterLink, CommonModule ]
})
export class SideNavComponent {
  // Sidebar menu items
  menuItems = [
    { label: 'Dashboard', icon: 'home', link: '/dashboard' },
    { label: 'Bookmarks', icon: 'bookmark', link: '/bookmarks' },
    { label: 'Reports', icon: 'chart-bar', link: '/reports', subMenu: ['Daily', 'Monthly', 'Yearly'] },
    { label: 'Team', icon: 'users', link: '/team' },
    { label: 'Messages', icon: 'envelope', link: '/messages', badge: 3 },
    { label: 'Calendar', icon: 'calendar', link: '/calendar' },
    { label: 'Settings', icon: 'cog', link: '/settings' },
  ];
  user = { name: 'Amy Elsner', profileImage: 'https://via.placeholder.com/50' };

  // Toggle submenu visibility
  toggleSubmenu(item: any) {
    item.expanded = !item.expanded;
  }
}
