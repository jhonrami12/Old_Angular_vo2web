import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangComponent } from './lang.component';
import { TranslateService } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../../modules/primeng.module';

@NgModule({
  declarations: [LangComponent],
  imports: [CommonModule, PrimengModule, FormsModule, ReactiveFormsModule],
  exports: [LangComponent],
  providers: [TranslateService],
})
export class LangModule {}
