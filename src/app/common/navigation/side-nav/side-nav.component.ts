import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-nav.component.html',
})
export class SidebarComponent {
  // Sidebar menu items
  menuItems = [
    {
      label: 'Dashboard',
      icon: 'fas fa-tachometer-alt', // Font Awesome icon class
      route: '/dashboard', // Link to the route
      active: true // Can be used to highlight the active menu
    },
    {
      label: 'Ecommerce',
      icon: 'fas fa-shopping-cart',
      route: '/ecommerce',
      active: false
    },
    {
      label: 'Analytics',
      icon: 'fas fa-chart-line',
      route: '/analytics',
      active: false
    },
    {
      label: 'Settings',
      icon: 'fas fa-cog',
      route: '/settings',
      active: false,
      children: [ // Dropdown submenu items
        { label: 'Profile', route: '/settings/profile' },
        { label: 'Account', route: '/settings/account' },
        { label: 'Notifications', route: '/settings/notifications' }
      ]
    }
  ];

  // Toggle submenu visibility
  toggleSubmenu(item: any) {
    item.expanded = !item.expanded;
  }
}
