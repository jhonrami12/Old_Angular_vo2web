import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { V2vLoader } from '../models/custom-loader';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useClass: V2vLoader,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [TranslateModule],
})
export class V2vTranslateModule {}
