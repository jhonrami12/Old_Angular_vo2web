import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { PrimengModule } from '../../modules/primeng.module';
import { CustomTranslateModule } from '../../modules/translate.module';

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule, PrimengModule, CustomTranslateModule],
  exports: [LoadingComponent],
})
export class LoadingModule {}
