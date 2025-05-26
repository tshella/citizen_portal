import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../payment.service';
import { NotificationService } from '../../../core/services/notification.service';
import { CreatePaymentDto } from '../dto/create-payment.dto';

@Component({
  selector: 'app-payment-create',
  templateUrl: './payment-create.component.html',
  styleUrls: ['./payment-create.component.scss']
})
export class PaymentCreateComponent implements OnInit {
  paymentForm: FormGroup;
  applicationId: string;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private paymentService: PaymentService,
    private notification: NotificationService
  ) {
    this.paymentForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1)]],
      paymentMethod: ['CARD', Validators.required],
      cardToken: ['']
    });
  }

  ngOnInit(): void {
    this.applicationId = this.route.snapshot.paramMap.get('applicationId')!;
  }

  onSubmit(): void {
    if (this.paymentForm.invalid) {
      return;
    }

    this.loading = true;
    const paymentData: CreatePaymentDto = {
      applicationId: this.applicationId,
      ...this.paymentForm.value
    };

    this.paymentService.create(paymentData).subscribe({
      next: () => {
        this.notification.showSuccess('Payment processed successfully');
        this.router.navigate(['/applications', this.applicationId]);
      },
      error: () => {
        this.loading = false;
        this.notification.showError('Payment failed. Please try again.');
      }
    });
  }
}