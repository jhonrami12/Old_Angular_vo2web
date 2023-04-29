import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbComponent } from './bread-crumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  declarations: [BreadCrumbComponent],
  imports: [CommonModule, BreadcrumbModule],
  exports: [BreadCrumbComponent],
})
export class BreadCrumbModule {}
