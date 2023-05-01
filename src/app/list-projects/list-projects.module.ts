import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProjectsComponent } from './list-projects.component';
import { RouterModule, Routes } from '@angular/router';
import { PrimengModule } from '../shared/modules/primeng.module';
import { CustomTranslateModule } from '../shared/modules/translate.module';
import { ProjectModule } from './components/project/project.module';

const routes: Routes = [
  {
    path: '',
    component: ListProjectsComponent,
  },
];

@NgModule({
  declarations: [ListProjectsComponent],
  imports: [
    CommonModule,
    CustomTranslateModule,
    ProjectModule,
    PrimengModule,
    RouterModule.forChild(routes),
  ],
  exports: [ListProjectsComponent],
})
export class ListProjectsModule {}
