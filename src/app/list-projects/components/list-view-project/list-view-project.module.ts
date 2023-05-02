import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewProjectComponent } from './list-view-project.component';
import { CustomTranslateModule } from 'src/app/shared/modules/translate.module';
import { PrimengModule } from '../../../shared/modules/primeng.module';

@NgModule({
  declarations: [ListViewProjectComponent],
  imports: [CommonModule, CustomTranslateModule, PrimengModule],
  exports: [ListViewProjectComponent],
})
export class ListViewProjectModule {}
