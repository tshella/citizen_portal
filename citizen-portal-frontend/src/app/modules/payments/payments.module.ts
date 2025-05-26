import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material.module';
import { SharedModule } from '../../shared/shared.module';

import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { PaymentCreateComponent } from './payment-create/payment-create.component';
import { PaymentService } from './payment.service';
import { PaymentStatusPipe } from './pipes/payment-status.pipe';

const routes = [
  { 
    path: '', 
    component: PaymentListComponent,
    data: { title: 'My Payments' }
  },
  { 
    path: 'new/:applicationId', 
    component: PaymentCreateComponent,
    data: { title: 'Make Payment' }
  },
  { 
    path: ':id', 
    component: PaymentDetailComponent,
    data: { title: 'Payment Details' }
  }
];

@NgModule({
  declarations: [
    PaymentListComponent,
    PaymentDetailComponent,
    PaymentCreateComponent,
    PaymentStatusPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ],
  providers: [
    PaymentService
  ]
})
export class PaymentsModule { }