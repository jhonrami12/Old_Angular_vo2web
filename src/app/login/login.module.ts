import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V2vLoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { V2vPrimengModule } from 'src/app/shared/modules/primeng.module';
import { V2vLangModule } from 'src/app/shared/components/lang/lang.module';
import { V2vTranslateModule } from 'src/app/shared/modules/translate.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: V2vLoginComponent,
  },
];

@NgModule({
  declarations: [V2vLoginComponent],
  imports: [
    CommonModule,
    V2vPrimengModule,
    V2vLangModule,
    ReactiveFormsModule,
    V2vTranslateModule,
    RouterModule.forChild(routes),
  ],
  exports: [V2vLoginComponent],
})
export class V2vLoginModule {}
