import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { PrimengModule } from '../shared/modules/primeng.module';
import { CustomTranslateModule } from '../shared/modules/translate.module';
import { MessageService } from 'primeng/api';
import { LangModule } from '../shared/components/lang/lang.module';
import { UserModule } from '../user/user.module';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'list-projects',
        loadChildren: () =>
          import('../list-projects/list-projects.module').then(
            (m) => m.ListProjectsModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [DashboardComponent, HomeComponent],
  imports: [
    CommonModule,
    LangModule,
    PrimengModule,
    UserModule,
    CustomTranslateModule,
    RouterModule.forChild(routes),
  ],
  exports: [DashboardComponent],
  providers: [MessageService],
})
export class DashboardModule {}
