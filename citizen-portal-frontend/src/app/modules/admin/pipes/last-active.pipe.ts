import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'lastActive'
})
export class LastActivePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(value: Date | string | null): string {
    if (!value) return 'Never';
    
    const date = typeof value === 'string' ? new Date(value) : value;
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays <= 7) return `${diffDays} days ago`;
    
    return this.datePipe.transform(date, 'mediumDate') || '';
  }
}