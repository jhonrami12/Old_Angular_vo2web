import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V2vCardViewProjectComponent } from './card-view-project.component';
import { V2vPrimengModule } from '../../../shared/modules/primeng.module';
import { V2vTranslateModule } from '../../../shared/modules/translate.module';
import { V2vCardProjectModule } from '../card-project/card-project.module';

@NgModule({
  declarations: [V2vCardViewProjectComponent],
  imports: [
    CommonModule,
    V2vPrimengModule,
    V2vTranslateModule,
    V2vCardProjectModule,
  ],
  exports: [V2vCardViewProjectComponent],
})
export class V2vCardViewProjectModule {}
