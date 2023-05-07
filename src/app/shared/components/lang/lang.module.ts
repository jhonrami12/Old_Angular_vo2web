import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V2vLangComponent } from './lang.component';
import { TranslateService } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [V2vLangComponent],
  imports: [CommonModule, DropdownModule, FormsModule, ReactiveFormsModule],
  exports: [V2vLangComponent],
  providers: [TranslateService],
})
export class V2vLangModule {}
