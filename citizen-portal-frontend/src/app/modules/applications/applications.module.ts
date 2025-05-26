import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material.module';

import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationCreateComponent } from './application-create/application-create.component';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';

@NgModule({
  declarations: [
    ApplicationListComponent,
    ApplicationCreateComponent,
    ApplicationDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ApplicationListComponent },
      { path: 'new', component: ApplicationCreateComponent },
      { path: ':id', component: ApplicationDetailComponent }
    ]),
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ApplicationsModule {}