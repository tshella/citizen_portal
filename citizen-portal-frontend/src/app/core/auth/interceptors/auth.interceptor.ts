import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router,
    private notification: NotificationService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Skip interception for auth requests
    if (request.url.includes('/auth/')) {
      return next.handle(request);
    }

    const token = this.authService.getAccessToken();
    
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError(err => {
        if (err.status === 401) {
          // Auto logout if 401 response returned from api
          this.authService.logout();
          this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
          this.notification.showError('Session expired. Please login again.');
        } else if (err.status === 403) {
          this.notification.showError('You are not authorized to perform this action.');
        }
        
        const error = err.error?.message || err.statusText;
        return throwError(() => error);
      })
    );
  }
}