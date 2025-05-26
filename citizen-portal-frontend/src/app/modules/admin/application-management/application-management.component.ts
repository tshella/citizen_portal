import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../applications/application.service';
import { Application } from '../../applications/application.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-application-management',
  templateUrl: './application-management.component.html',
  styleUrls: ['./application-management.component.scss']
})
export class ApplicationManagementComponent implements OnInit {
  dataSource = new MatTableDataSource<Application>();
  displayedColumns = ['referenceNumber', 'status', 'createdAt', 'user', 'actions'];
  loading = true;

  constructor(private applicationService: ApplicationService) {}

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

  updateStatus(applicationId: string, status: string): void {
    // Implementation for status update
  }
}