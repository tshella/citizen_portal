import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ServiceCategory } from '../service.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {
  categories: ServiceCategory[] = [];
  loading = true;

  constructor(
    private serviceService: ServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.serviceService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  viewCategory(categoryId: string): void {
    this.router.navigate(['/services/category', categoryId]);
  }
}