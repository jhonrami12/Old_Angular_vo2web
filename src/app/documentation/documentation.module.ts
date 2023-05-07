import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V2vDocumentationComponent } from './documentation.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: V2vDocumentationComponent,
  },
];

@NgModule({
  declarations: [V2vDocumentationComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [V2vDocumentationComponent],
})
export class V2vDocumentationModule {}
