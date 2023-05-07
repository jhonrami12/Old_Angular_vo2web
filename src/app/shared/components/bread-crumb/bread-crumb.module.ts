import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V2vBreadCrumbComponent } from './bread-crumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  declarations: [V2vBreadCrumbComponent],
  imports: [CommonModule, BreadcrumbModule],
  exports: [V2vBreadCrumbComponent],
})
export class V2vBreadCrumbModule {}
