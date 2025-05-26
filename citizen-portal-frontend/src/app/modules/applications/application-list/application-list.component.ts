import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import { Application } from '../application.model';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent implements OnInit {
  dataSource = new MatTableDataSource<Application>();
  displayedColumns = ['referenceNumber', 'service', 'status', 'createdAt', 'actions'];
  loading = true;

  constructor(
    private applicationService: ApplicationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadApplications();
  }

  loadApplications(): void {
    this.applicationService.getAll().subscribe({
      next: (applications) => {
        this.dataSource.data = applications;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  viewDetails(applicationId: string): void {
    this.router.navigate(['/applications', applicationId]);
  }

  createNew(): void {
    this.router.navigate(['/applications/new']);
  }
}