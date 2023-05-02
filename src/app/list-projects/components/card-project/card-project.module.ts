import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../../../shared/modules/primeng.module';
import { CustomTranslateModule } from '../../../shared/modules/translate.module';
import { CardProjectComponent } from '../card-project/card-project.component';

@NgModule({
  declarations: [CardProjectComponent],
  imports: [CommonModule, PrimengModule, CustomTranslateModule],
  exports: [CardProjectComponent],
})
export class CardProjectModule {}
