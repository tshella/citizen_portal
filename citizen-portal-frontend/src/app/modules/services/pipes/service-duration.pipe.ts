import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serviceDuration'
})
export class ServiceDurationPipe implements PipeTransform {
  transform(value: number): string {
    if (value === 1) return '1 day';
    if (value <= 7) return `${value} days`;
    if (value <= 30) return `${Math.floor(value / 7)} weeks`;
    return `${Math.floor(value / 30)} months`;
  }
}