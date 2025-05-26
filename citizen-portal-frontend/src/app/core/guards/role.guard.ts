import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const expectedRoles = next.data['roles'] as Array<string>;
    const userRoles = this.authService.getCurrentUserRoles();

    if (!expectedRoles || expectedRoles.length === 0) {
      return true;
    }

    const hasRole = expectedRoles.some(role => userRoles.includes(role));
    
    if (this.authService.isAuthenticated() && hasRole) {
      return true;
    }

    this.router.navigate(['/unauthorized']);
    return false;
  }
}