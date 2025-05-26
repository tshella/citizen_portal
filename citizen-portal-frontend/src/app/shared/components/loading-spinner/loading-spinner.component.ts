import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: `
    <div class="spinner-container" *ngIf="loading">
      <mat-spinner [diameter]="diameter" [color]="color"></mat-spinner>
      <div class="spinner-message" *ngIf="message">{{ message }}</div>
    </div>
  `,
  styles: [`
    .spinner-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .spinner-message {
      margin-top: 16px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
    }
  `]
})
export class LoadingSpinnerComponent {
  @Input() loading = false;
  @Input() diameter = 50;
  @Input() color = 'primary';
  @Input() message = '';
}