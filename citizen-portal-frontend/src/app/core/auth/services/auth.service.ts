import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/signin`, { username, password })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  refreshToken(): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/refreshtoken`, {
      refreshToken: this.currentUserValue?.refreshToken
    }).pipe(map(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
    }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    window.location.href = environment.auth.logoutRedirectUri;
  }

  isAuthenticated(): boolean {
    const token = this.currentUserValue?.accessToken;
    return !this.jwtHelper.isTokenExpired(token);
  }

  hasRole(role: string): boolean {
    if (!this.isAuthenticated()) return false;
    const token = this.currentUserValue?.accessToken;
    const decodedToken = this.jwtHelper.decodeToken(token);
    return decodedToken?.roles?.includes(role);
  }
}