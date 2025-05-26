import { Component } from '@angular/core';
import { RoleGuard } from '../../../core/guards/role.guard';

@Component({
  selector: 'app-admin-controller',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AdminController {
  constructor() {}
}