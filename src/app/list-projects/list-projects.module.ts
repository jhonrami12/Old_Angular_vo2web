import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V2vListProjectsComponent } from './list-projects.component';
import { RouterModule, Routes } from '@angular/router';
import { V2vPrimengModule } from '../shared/modules/primeng.module';
import { V2vTranslateModule } from '../shared/modules/translate.module';
import { V2vCardViewProjectModule } from './components/card-view-project/card-view-project.module';
import { V2vListViewProjectModule } from './components/list-view-project/list-view-project.module';
import { V2vFolderViewProjectModule } from './components/folder-view-project/folder-view-project.module';
import { V2vSpeedDialModule } from '../shared/components/speed-dial/speed-dial.module';

const routes: Routes = [
  {
    path: '',
    component: V2vListProjectsComponent,
  },
];

@NgModule({
  declarations: [V2vListProjectsComponent],
  imports: [
    CommonModule,
    V2vTranslateModule,
    V2vCardViewProjectModule,
    V2vListViewProjectModule,
    V2vSpeedDialModule,
    V2vFolderViewProjectModule,
    V2vPrimengModule,
    RouterModule.forChild(routes),
  ],
  exports: [V2vListProjectsComponent],
})
export class V2vListProjectsModule {}
