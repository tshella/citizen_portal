import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/material.module';
import { SharedModule } from '../../shared/shared.module';

import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServiceCategoryComponent } from './service-category/service-category.component';
import { ServiceService } from './services/service.service';
import { ServiceFeePipe } from './pipes/service-fee.pipe';

const routes = [
  { 
    path: '', 
    component: ServiceListComponent,
    data: { title: 'Available Services' }
  },
  { 
    path: 'category/:categoryId', 
    component: ServiceCategoryComponent,
    data: { title: 'Service Category' }
  },
  { 
    path: ':id', 
    component: ServiceDetailComponent,
    data: { title: 'Service Details' }
  }
];

@NgModule({
  declarations: [
    ServiceListComponent,
    ServiceDetailComponent,
    ServiceCategoryComponent,
    ServiceFeePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule
  ],
  providers: [
    ServiceService
  ]
})
export class ServicesModule { }