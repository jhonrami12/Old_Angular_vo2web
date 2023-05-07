import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V2vLoadingComponent } from './loading.component';
import { V2vTranslateModule } from '../../modules/translate.module';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [V2vLoadingComponent],
  imports: [CommonModule, ProgressBarModule, V2vTranslateModule],
  exports: [V2vLoadingComponent],
})
export class V2vLoadingModule {}
