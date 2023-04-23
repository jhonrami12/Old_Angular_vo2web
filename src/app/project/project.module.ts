import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { PrimengModule } from '../shared/modules/primeng.module';

@NgModule({
  declarations: [ProjectComponent],
  imports: [CommonModule, PrimengModule],
  exports: [ProjectComponent],
})
export class ProjectModule {}
