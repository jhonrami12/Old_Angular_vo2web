import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V2vRegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: V2vRegisterComponent,
  },
];

@NgModule({
  declarations: [V2vRegisterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [V2vRegisterComponent],
})
export class V2vRegisterModule {}
