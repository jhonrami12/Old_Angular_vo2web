import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V2vPrimengModule } from '../../../shared/modules/primeng.module';
import { V2vTranslateModule } from '../../../shared/modules/translate.module';
import { V2vCardProjectComponent } from '../card-project/card-project.component';
import { V2vSpeedDialModule } from 'src/app/shared/components/speed-dial/speed-dial.module';

@NgModule({
  declarations: [V2vCardProjectComponent],
  imports: [
    CommonModule,
    V2vPrimengModule,
    V2vTranslateModule,
    V2vSpeedDialModule,
  ],
  exports: [V2vCardProjectComponent],
})
export class V2vCardProjectModule {}
