import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V2vQuestionsComponent } from './questions.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: V2vQuestionsComponent,
  },
];

@NgModule({
  declarations: [V2vQuestionsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [V2vQuestionsComponent],
})
export class V2vQuestionsModule {}
