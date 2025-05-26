import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { GovernmentService, ServiceCategory } from '../service.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-category',
  templateUrl: './service-category.component.html',
  styleUrls: ['./service-category.component.scss']
})
export class ServiceCategoryComponent implements OnInit {
  category: ServiceCategory | null = null;
  services: GovernmentService[] = [];
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private serviceService: ServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const categoryId = this.route.snapshot.paramMap.get('categoryId')!;
    this.loadCategory(categoryId);
    this.loadServices(categoryId);
  }

  loadCategory(categoryId: string): void {
    this.serviceService.getCategories().subscribe({
      next: (categories) => {
        this.category = categories.find(c => c.id === categoryId) || null;
      }
    });
  }

  loadServices(categoryId: string): void {
    this.serviceService.getByCategory(categoryId).subscribe({
      next: (services) => {
        this.services = services;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  applyForService(serviceId: string): void {
    this.router.navigate(['/applications/new'], { queryParams: { serviceId } });
  }
}