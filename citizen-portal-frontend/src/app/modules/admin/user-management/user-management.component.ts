import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { User } from '../../user.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  dataSource = new MatTableDataSource<User>();
  displayedColumns = ['username', 'email', 'roles', 'lastLogin', 'actions'];
  loading = true;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.adminService.getUsers().subscribe({
      next: (users) => {
        this.dataSource.data = users;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  editUser(userId: string): void {
    // Implementation for user editing
  }
}