import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Payment } from './payment.model';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ApiResponse } from '../../shared/models/api-response.model';
import { PaginatedResponse } from '../../shared/models/paginated-response.model';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private readonly apiUrl = `${environment.apiUrl}/payments`;

  constructor(private http: HttpClient) {}

  /**
   * Get all payments with optional pagination
   * @param page Page number (1-based)
   * @param limit Items per page
   */
  getAll(page = 1, limit = 10): Observable<PaginatedResponse<Payment>> {
    const params = {
      page: page.toString(),
      limit: limit.toString()
    };

    return this.http.get<ApiResponse<PaginatedResponse<Payment>>>(this.apiUrl, { params }).pipe(
      map(response => response.data || { items: [], total: 0, page, limit, totalPages: 0 }),
      catchError(() => of({ items: [], total: 0, page, limit, totalPages: 0 }))
    );
  }

  /**
   * Get payments by application ID
   * @param applicationId Application ID to filter by
   */
  getByApplication(applicationId: string): Observable<Payment[]> {
    return this.http.get<ApiResponse<Payment[]>>(`${this.apiUrl}?applicationId=${applicationId}`).pipe(
      map(response => response.data || []),
      catchError(() => of([]))
    );
  }

  /**
   * Get payment by ID
   * @param id Payment ID
   */
  getById(id: string): Observable<Payment | null> {
    return this.http.get<ApiResponse<Payment>>(`${this.apiUrl}/${id}`).pipe(
      map(response => response.data || null),
      catchError(() => of(null))
    );
  }

  /**
   * Create a new payment
   * @param dto Payment data
   */
  create(dto: CreatePaymentDto): Observable<Payment | null> {
    return this.http.post<ApiResponse<Payment>>(this.apiUrl, dto).pipe(
      map(response => response.data || null),
      catchError(() => of(null))
    );
  }

  /**
   * Process payment webhook
   * @param payload Webhook payload
   */
  processWebhook(payload: unknown): Observable<boolean> {
    return this.http.post<ApiResponse<void>>(`${this.apiUrl}/webhook`, payload).pipe(
      map(response => response.success || false),
      catchError(() => of(false))
    );
  }

  /**
   * Get payment receipt download URL
   * @param paymentId Payment ID
   */
  getReceiptUrl(paymentId: string): string {
    return `${this.apiUrl}/${paymentId}/receipt`;
  }
}