import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from '../services/application.service';
import { Application } from './application.model';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-application-controller',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ApplicationController implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private applicationService: ApplicationService,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    // Controller-level initialization if needed
  }
}