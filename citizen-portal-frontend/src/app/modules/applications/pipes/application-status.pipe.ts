import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'applicationStatus'
})
export class ApplicationStatusPipe implements PipeTransform {
  transform(value: string): string {
    const statusMap: Record<string, string> = {
      'DRAFT': 'Draft',
      'SUBMITTED': 'Submitted',
      'UNDER_REVIEW': 'Under Review',
      'APPROVED': 'Approved',
      'REJECTED': 'Rejected'
    };
    return statusMap[value] || value;
  }
}