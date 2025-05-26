import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../payment.service';
import { Payment } from '../payment.model';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.scss']
})
export class PaymentDetailComponent implements OnInit {
  payment: Payment | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {
    const paymentId = this.route.snapshot.paramMap.get('id')!;
    this.paymentService.getById(paymentId).subscribe({
      next: (payment) => {
        this.payment = payment;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  downloadReceipt(): void {
    if (this.payment?.receiptUrl) {
      window.open(this.payment.receiptUrl, '_blank');
    }
  }
}