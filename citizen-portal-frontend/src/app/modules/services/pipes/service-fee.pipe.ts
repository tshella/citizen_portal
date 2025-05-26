import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serviceFee'
})
export class ServiceFeePipe implements PipeTransform {
  transform(value: number): string {
    if (value === 0) return 'Free';
    return `$${value.toFixed(2)}`;
  }
}