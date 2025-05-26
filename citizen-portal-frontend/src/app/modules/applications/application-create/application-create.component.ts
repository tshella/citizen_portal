import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationService } from '../application.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../../core/services/notification.service';
import { CreateApplicationDto } from '../dto/create-application.dto';

@Component({
  selector: 'app-application-create',
  templateUrl: './application-create.component.html',
  styleUrls: ['./application-create.component.scss']
})
export class ApplicationCreateComponent implements OnInit {
  applicationForm: FormGroup;
  loading = false;
  selectedFiles: File[] = [];

  constructor(
    private fb: FormBuilder,
    private applicationService: ApplicationService,
    private router: Router,
    private notification: NotificationService
  ) {
    this.applicationForm = this.fb.group({
      serviceId: ['', Validators.required],
      applicationData: this.fb.group({}),
      documents: ['']
    });
  }

  ngOnInit(): void {
    // Initialize dynamic form based on selected service
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = Array.from(input.files);
    }
  }

  onSubmit(): void {
    if (this.applicationForm.invalid) {
      return;
    }

    this.loading = true;
    const applicationData: CreateApplicationDto = {
      ...this.applicationForm.value,
      documents: this.selectedFiles
    };

    this.applicationService.create(applicationData).subscribe({
      next: (application) => {
        this.notification.showSuccess('Application submitted successfully');
        this.router.navigate(['/applications', application.id]);
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}