import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Payment } from '../payment.model';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnInit {
  dataSource = new MatTableDataSource<Payment>();
  displayedColumns = ['transactionId', 'amount', 'status', 'paymentDate', 'actions'];
  loading = true;

  constructor(
    private paymentService: PaymentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPayments();
  }

  loadPayments(): void {
    this.paymentService.getAll().subscribe({
      next: (payments) => {
        this.dataSource.data = payments;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  viewDetails(paymentId: string): void {
    this.router.navigate(['/payments', paymentId]);
  }
}