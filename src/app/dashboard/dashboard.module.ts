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
import { BreadCrumbModule } from '../shared/components/bread-crumb/bread-crumb.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      breadCrumb: 'home',
    },
    children: [
      {
        path: 'projects',
        loadChildren: () =>
          import('../list-projects/list-projects.module').then(
            (m) => m.ListProjectsModule
          ),
        data: {
          breadCrumb: 'projects',
        },
      },
      {
        path: 'account',
        loadChildren: () =>
          import('../user-account/user-account.module').then(
            (m) => m.UserAccountModule
          ),
        data: {
          breadCrumb: 'account',
        },
      },
      {
        path: 'help',
        loadChildren: () =>
          import('../help/help.module').then((m) => m.HelpModule),
        data: {
          breadCrumb: 'help',
        },
      },
      {
        path: 'documentation',
        loadChildren: () =>
          import('../documentation/documentation.module').then(
            (m) => m.DocumentationModule
          ),
        data: {
          breadCrumb: 'documentation',
        },
      },
      {
        path: 'questions',
        loadChildren: () =>
          import('../questions/questions.module').then(
            (m) => m.QuestionsModule
          ),
        data: {
          breadCrumb: 'questions',
        },
      },
      {
        path: 'pricing',
        loadChildren: () =>
          import('../pricing/pricing.module').then((m) => m.PricingModule),
        data: {
          breadCrumb: 'pricing',
        },
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
    BreadCrumbModule,
    RouterModule.forChild(routes),
  ],
  exports: [DashboardComponent],
  providers: [MessageService],
})
export class DashboardModule {}
