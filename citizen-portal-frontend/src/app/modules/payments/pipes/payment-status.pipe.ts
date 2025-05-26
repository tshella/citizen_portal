import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paymentStatus'
})
export class PaymentStatusPipe implements PipeTransform {
  transform(value: string): string {
    const statusMap: Record<string, string> = {
      'PENDING': 'Pending',
      'COMPLETED': 'Completed',
      'FAILED': 'Failed',
      'REFUNDED': 'Refunded'
    };
    return statusMap[value] || value;
  }
}