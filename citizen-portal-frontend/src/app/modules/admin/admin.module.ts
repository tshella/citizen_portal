import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/material.module';
import { SharedModule } from '../../shared/shared.module';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ApplicationManagementComponent } from './application-management/application-management.component';
import { AdminService } from './admin.service';
import { RoleGuard } from '../../core/guards/role.guard';

const routes = [
  { 
    path: '', 
    component: AdminDashboardComponent,
    data: { title: 'Admin Dashboard', roles: ['ROLE_ADMIN'] }
  },
  { 
    path: 'users', 
    component: UserManagementComponent,
    data: { title: 'User Management', roles: ['ROLE_ADMIN'] }
  },
  { 
    path: 'applications', 
    component: ApplicationManagementComponent,
    data: { title: 'Application Management', roles: ['ROLE_ADMIN', 'ROLE_MODERATOR'] }
  }
];

@NgModule({
  declarations: [
    AdminDashboardComponent,
    UserManagementComponent,
    ApplicationManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule
  ],
  providers: [
    AdminService,
    RoleGuard
  ]
})
export class AdminModule { }