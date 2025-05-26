import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Payment } from './';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private readonly apiUrl = `${environment.apiUrl}/payments`;

  constructor(private http: HttpClient) {}

  getByApplication(applicationId: string): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.apiUrl}?applicationId=${applicationId}`);
  }

  getById(id: string): Observable<Payment> {
    return this.http.get<Payment>(`${this.apiUrl}/${id}`);
  }

  create(dto: CreatePaymentDto): Observable<Payment> {
    return this.http.post<Payment>(this.apiUrl, dto);
  }

  processWebhook(payload: any): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/webhook`, payload);
  }
}