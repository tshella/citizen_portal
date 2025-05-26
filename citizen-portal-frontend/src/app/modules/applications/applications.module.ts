import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material.module';
import { SharedModule } from '../../shared/shared.module';

import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationCreateComponent } from './application-create/application-create.component';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';
import { ApplicationService } from './services/application.service';
import { ApplicationStatusPipe } from './pipes/application-status.pipe';
import { ApplicationTypePipe } from './pipes/application-type.pipe';

const routes = [
  { 
    path: '', 
    component: ApplicationListComponent,
    data: { title: 'My Applications' }
  },
  { 
    path: 'new', 
    component: ApplicationCreateComponent,
    data: { title: 'New Application' }
  },
  { 
    path: ':id', 
    component: ApplicationDetailComponent,
    data: { title: 'Application Details' }
  }
];

@NgModule({
  declarations: [
    ApplicationListComponent,
    ApplicationCreateComponent,
    ApplicationDetailComponent,
    ApplicationStatusPipe,
    ApplicationTypePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ],
  providers: [
    ApplicationService
  ]
})
export class ApplicationsModule { }