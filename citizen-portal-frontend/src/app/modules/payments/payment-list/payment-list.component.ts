import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Payment } from '../payment.model';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnInit {
  dataSource = new MatTableDataSource<Payment>([]);
  displayedColumns: string[] = ['transactionId', 'amount', 'status', 'paymentDate', 'actions'];
  loading = true;
  error = false;

  constructor(
    private paymentService: PaymentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPayments();
  }

  loadPayments(): void {
    this.loading = true;
    this.error = false;
    
    this.paymentService.getAll().pipe(
      finalize(() => this.loading = false)
    ).subscribe({
      next: (payments: Payment[]) => {
        this.dataSource.data = payments;
      },
      error: () => {
        this.error = true;
        this.dataSource.data = []; // Clear table on error
      }
    });
  }

  viewDetails(paymentId: string): void {
    this.router.navigate(['/payments', paymentId]);
  }

  retryLoad(): void {
    this.loadPayments();
  }
}