import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from '../application.service';
import { Application } from '../application.model';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.scss']
})
export class ApplicationDetailComponent implements OnInit {
  application: Application | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private applicationService: ApplicationService
  ) {}

  ngOnInit(): void {
    const applicationId = this.route.snapshot.paramMap.get('id')!;
    this.applicationService.getById(applicationId).subscribe({
      next: (application) => {
        this.application = application;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  downloadDocument(documentId: string): void {
    // Implementation for document download
  }
}