import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'applications', 
    pathMatch: 'full' 
  },
  { 
    path: 'login', 
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) 
  },
  { 
    path: 'applications', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/applications/applications.module').then(m => m.ApplicationsModule) 
  },
  { 
    path: 'payments', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/payments/payments.module').then(m => m.PaymentsModule) 
  },
  { 
    path: 'admin', 
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['ROLE_ADMIN'] },
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) 
  },
  { 
    path: '**', 
    redirectTo: 'applications' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}