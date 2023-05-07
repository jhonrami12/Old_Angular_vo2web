import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V2vDashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { V2vPrimengModule } from '../shared/modules/primeng.module';
import { V2vTranslateModule } from '../shared/modules/translate.module';
import { MessageService } from 'primeng/api';
import { V2vLangModule } from '../shared/components/lang/lang.module';
import { V2vUserModule } from '../user/user.module';
import { V2vHomeComponent } from './components/home/home.component';
import { V2vBreadCrumbModule } from '../shared/components/bread-crumb/bread-crumb.module';

const routes: Routes = [
  {
    path: '',
    component: V2vDashboardComponent,
    data: {
      breadCrumb: 'home',
    },
    children: [
      {
        path: 'projects',
        loadChildren: () =>
          import('../list-projects/list-projects.module').then(
            (m) => m.V2vListProjectsModule
          ),
        data: {
          breadCrumb: 'projects',
        },
      },
      {
        path: 'account',
        loadChildren: () =>
          import('../user-account/user-account.module').then(
            (m) => m.V2vUserAccountModule
          ),
        data: {
          breadCrumb: 'account',
        },
      },
      {
        path: 'help',
        loadChildren: () =>
          import('../help/help.module').then((m) => m.V2vHelpModule),
        data: {
          breadCrumb: 'help',
        },
      },
      {
        path: 'documentation',
        loadChildren: () =>
          import('../documentation/documentation.module').then(
            (m) => m.V2vDocumentationModule
          ),
        data: {
          breadCrumb: 'documentation',
        },
      },
      {
        path: 'questions',
        loadChildren: () =>
          import('../questions/questions.module').then(
            (m) => m.V2vQuestionsModule
          ),
        data: {
          breadCrumb: 'questions',
        },
      },
      {
        path: 'pricing',
        loadChildren: () =>
          import('../pricing/pricing.module').then((m) => m.V2vPricingModule),
        data: {
          breadCrumb: 'pricing',
        },
      },
    ],
  },
];

@NgModule({
  declarations: [V2vDashboardComponent, V2vHomeComponent],
  imports: [
    CommonModule,
    V2vLangModule,
    V2vPrimengModule,
    V2vUserModule,
    V2vTranslateModule,
    V2vBreadCrumbModule,
    RouterModule.forChild(routes),
  ],
  exports: [V2vDashboardComponent],
  providers: [MessageService],
})
export class V2vDashboardModule {}
