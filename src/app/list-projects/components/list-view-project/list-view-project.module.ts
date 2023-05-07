import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V2vListViewProjectComponent } from './list-view-project.component';
import { V2vTranslateModule } from 'src/app/shared/modules/translate.module';
import { V2vPrimengModule } from '../../../shared/modules/primeng.module';
import { V2vSpeedDialModule } from 'src/app/shared/components/speed-dial/speed-dial.module';

@NgModule({
  declarations: [V2vListViewProjectComponent],
  imports: [
    CommonModule,
    V2vPrimengModule,
    V2vTranslateModule,
    V2vSpeedDialModule,
  ],
  exports: [V2vListViewProjectComponent],
})
export class V2vListViewProjectModule {}
