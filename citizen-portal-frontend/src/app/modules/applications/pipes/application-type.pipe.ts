import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'applicationType'
})
export class ApplicationTypePipe implements PipeTransform {
  transform(serviceId: string, services: any[]): string {
    const service = services.find(s => s.id === serviceId);
    return service ? service.name : 'Unknown Service';
  }
}