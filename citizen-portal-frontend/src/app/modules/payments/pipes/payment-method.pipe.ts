import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paymentMethod'
})
export class PaymentMethodPipe implements PipeTransform {
  transform(value: string): string {
    const methodMap: Record<string, string> = {
      'CARD': 'Credit Card',
      'BANK_TRANSFER': 'Bank Transfer',
      'OTHER': 'Other'
    };
    return methodMap[value] || value;
  }
}