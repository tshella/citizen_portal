import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(
    private snackBar: MatSnackBar,
    private translate: TranslateService
  ) {}

  showSuccess(message: string): void {
    this.snackBar.open(this.translate.instant(message), 'X', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }

  showError(message: string): void {
    this.snackBar.open(this.translate.instant(message), 'X', {
      duration: 3000,
      panelClass: ['error-snackbar']
    });
  }

  showWarning(message: string): void {
    this.snackBar.open(this.translate.instant(message), 'X', {
      duration: 3000,
      panelClass: ['warning-snackbar']
    });
  }

  showInfo(message: string): void {
    this.snackBar.open(this.translate.instant(message), 'X', {
      duration: 3000,
      panelClass: ['info-snackbar']
    });
  }
}