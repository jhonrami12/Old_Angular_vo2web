import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { PrimengModule } from '../../../shared/modules/primeng.module';
import { CustomTranslateModule } from '../../../shared/modules/translate.module';

@NgModule({
  declarations: [ProjectComponent],
  imports: [CommonModule, PrimengModule, CustomTranslateModule],
  exports: [ProjectComponent],
})
export class ProjectModule {}
