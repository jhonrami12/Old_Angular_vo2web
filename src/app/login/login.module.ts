import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { PrimengModule } from 'src/app/shared/modules/primeng.module';
import { LangModule } from 'src/app/shared/components/lang/lang.module';
import { CustomTranslateModule } from 'src/app/shared/modules/translate.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    PrimengModule,
    CustomTranslateModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
