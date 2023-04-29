import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: QuestionsComponent,
  },
];

@NgModule({
  declarations: [QuestionsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [QuestionsComponent],
})
export class QuestionsModule {}
