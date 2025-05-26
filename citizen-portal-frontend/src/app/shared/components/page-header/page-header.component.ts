import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  template: `
    <div class="page-header">
      <h1>{{ title }}</h1>
      <div class="actions" *ngIf="showActions">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    }
    .page-header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 500;
    }
    .actions {
      display: flex;
      gap: 8px;
    }
  `]
})
export class PageHeaderComponent {
  @Input() title = '';
  @Input() showActions = true;
}