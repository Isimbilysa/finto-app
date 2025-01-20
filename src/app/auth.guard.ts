import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserServiceService } from './core/user/user-service.service';
import { MessageService } from 'primeng/api';
// import { AuthService } from './auth.service'; // Your authentication service

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserServiceService, private router: Router) {}

  canActivate(): boolean {
    if (this.userService.isAuthenticated()) {
      return true; 
    }
    this.router.navigate(['/signin']);
    return false;
  }
}
