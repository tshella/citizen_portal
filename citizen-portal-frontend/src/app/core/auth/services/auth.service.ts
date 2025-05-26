import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, map, tap } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtHelper: JwtHelperService
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('currentUser') || null)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  public getAccessToken(): string {
    return this.currentUserValue?.accessToken;
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/signin`, { username, password })
      .pipe(
        map(user => {
          // Store user details and jwt token in local storage
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  register(user: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/signup`, user);
  }

  refreshToken(): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/refreshtoken`, {
      refreshToken: this.currentUserValue?.refreshToken
    }).pipe(
      tap(user => {
        this.currentUserSubject.next(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
      })
    );
  }

  logout() {
    // Remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    const token = this.getAccessToken();
    return token && !this.jwtHelper.isTokenExpired(token);
  }

  hasRole(role: string): boolean {
    if (!this.isAuthenticated()) return false;
    const token = this.getAccessToken();
    const decodedToken = this.jwtHelper.decodeToken(token);
    return decodedToken?.roles?.includes(role);
  }

  getCurrentUserRoles(): string[] {
    if (!this.isAuthenticated()) return [];
    const token = this.getAccessToken();
    const decodedToken = this.jwtHelper.decodeToken(token);
    return decodedToken?.roles || [];
  }
}