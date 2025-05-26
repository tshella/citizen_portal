import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(path: string, params = {}): Observable<T> {
    return this.http.get<T>(`${environment.apiUrl}${path}`, { params });
  }

  post<T>(path: string, body: any = {}): Observable<T> {
    return this.http.post<T>(`${environment.apiUrl}${path}`, body);
  }

  put<T>(path: string, body: any = {}): Observable<T> {
    return this.http.put<T>(`${environment.apiUrl}${path}`, body);
  }

  patch<T>(path: string, body: any = {}): Observable<T> {
    return this.http.patch<T>(`${environment.apiUrl}${path}`, body);
  }

  delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(`${environment.apiUrl}${path}`);
  }
}