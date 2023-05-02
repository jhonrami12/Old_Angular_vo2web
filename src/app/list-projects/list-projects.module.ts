import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProjectsComponent } from './list-projects.component';
import { RouterModule, Routes } from '@angular/router';
import { PrimengModule } from '../shared/modules/primeng.module';
import { CustomTranslateModule } from '../shared/modules/translate.module';
import { CardViewProjectModule } from './components/card-view-project/card-view-project.module';
import { ListViewProjectModule } from './components/list-view-project/list-view-project.module';
import { FolderViewProjectModule } from './components/folder-view-project/folder-view-project.module';
import { CardProjectComponent } from './components/card-project/card-project.component';

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
    CardViewProjectModule,
    ListViewProjectModule,
    FolderViewProjectModule,
    PrimengModule,
    RouterModule.forChild(routes),
  ],
  exports: [ListProjectsComponent],
})
export class ListProjectsModule {}
