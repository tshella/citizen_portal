import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { GovernmentService, ServiceCategory } from './service.model';
import { CreateServiceDto } from './dto/create-service.dto';

@Injectable({ providedIn: 'root' })
export class ServiceService {
  private readonly apiUrl = `${environment.apiUrl}/services`;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<ServiceCategory[]> {
    return this.http.get<ServiceCategory[]>(`${this.apiUrl}/categories`);
  }

  getByCategory(categoryId: string): Observable<GovernmentService[]> {
    return this.http.get<GovernmentService[]>(`${this.apiUrl}?categoryId=${categoryId}`);
  }

  getById(id: string): Observable<GovernmentService> {
    return this.http.get<GovernmentService>(`${this.apiUrl}/${id}`);
  }

  create(dto: CreateServiceDto): Observable<GovernmentService> {
    return this.http.post<GovernmentService>(this.apiUrl, dto);
  }

  update(id: string, changes: Partial<GovernmentService>): Observable<GovernmentService> {
    return this.http.patch<GovernmentService>(`${this.apiUrl}/${id}`, changes);
  }
}