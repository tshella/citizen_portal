import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    LoadingSpinnerComponent,
    PageHeaderComponent,
    SafeHtmlPipe,
    TruncatePipe,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    ConfirmDialogComponent,
    LoadingSpinnerComponent,
    PageHeaderComponent,
    SafeHtmlPipe,
    TruncatePipe,
    ClickOutsideDirective
  ]
})
export class SharedModule { }