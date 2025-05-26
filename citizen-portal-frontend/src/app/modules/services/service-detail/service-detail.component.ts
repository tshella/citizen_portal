import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { GovernmentService } from '../service.model';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {
  service: GovernmentService | null = null;
  loading = true;
  relatedServices: GovernmentService[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceService: ServiceService,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    const serviceId = this.route.snapshot.paramMap.get('id')!;
    this.loadService(serviceId);
  }

  loadService(serviceId: string): void {
    this.serviceService.getById(serviceId).subscribe({
      next: (service) => {
        this.service = service;
        this.loadRelatedServices(service.categoryId, serviceId);
        this.loading = false;
      },
      error: () => {
        this.notification.showError('Failed to load service details');
        this.loading = false;
      }
    });
  }

  loadRelatedServices(categoryId: string, excludeServiceId: string): void {
    this.serviceService.getByCategory(categoryId).subscribe({
      next: (services) => {
        this.relatedServices = services.filter(s => s.id !== excludeServiceId).slice(0, 3);
      }
    });
  }

  applyForService(): void {
    if (this.service) {
      this.router.navigate(['/applications/new'], { 
        queryParams: { serviceId: this.service.id } 
      });
    }
  }
}