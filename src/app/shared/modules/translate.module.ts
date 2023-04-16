import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { CustomLoader } from '../models/custom-loader';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useClass: CustomLoader,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [TranslateModule],
})
export class CustomTranslateModule {}
