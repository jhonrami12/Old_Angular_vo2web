import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViewProjectComponent } from './card-view-project.component';
import { PrimengModule } from '../../../shared/modules/primeng.module';
import { CustomTranslateModule } from '../../../shared/modules/translate.module';
import { CardProjectModule } from '../card-project/card-project.module';

@NgModule({
  declarations: [CardViewProjectComponent],
  imports: [
    CommonModule,
    PrimengModule,
    CustomTranslateModule,
    CardProjectModule,
  ],
  exports: [CardViewProjectComponent],
})
export class CardViewProjectModule {}
