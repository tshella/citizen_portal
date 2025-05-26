import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Application, ApplicationDocument } from './application.model';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';

@Injectable({ providedIn: 'root' })
export class ApplicationService {
  private readonly apiUrl = `${environment.apiUrl}/applications`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Application[]> {
    return this.http.get<Application[]>(this.apiUrl);
  }

  getById(id: string): Observable<Application> {
    return this.http.get<Application>(`${this.apiUrl}/${id}`);
  }

  create(dto: CreateApplicationDto): Observable<Application> {
    const formData = new FormData();
    formData.append('serviceId', dto.serviceId);
    formData.append('applicationData', JSON.stringify(dto.applicationData));
    
    if (dto.documents) {
      dto.documents.forEach(doc => formData.append('documents', doc));
    }

    return this.http.post<Application>(this.apiUrl, formData);
  }

  update(id: string, dto: UpdateApplicationDto): Observable<Application> {
    const formData = new FormData();
    if (dto.applicationData) {
      formData.append('applicationData', JSON.stringify(dto.applicationData));
    }
    if (dto.status) {
      formData.append('status', dto.status);
    }
    if (dto.documents) {
      dto.documents.forEach(doc => formData.append('documents', doc));
    }

    return this.http.patch<Application>(`${this.apiUrl}/${id}`, formData);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getDocuments(applicationId: string): Observable<ApplicationDocument[]> {
    return this.http.get<ApplicationDocument[]>(`${this.apiUrl}/${applicationId}/documents`);
  }
}