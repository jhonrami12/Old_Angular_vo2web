import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyHomeComponent } from './components/body-home/body-home.component';
import { ProjectsDashboardComponent } from './components/projects-dashboard/projects-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: BodyHomeComponent,
  },
  {
    path: 'home',
    component: BodyHomeComponent,
  },
  {
    path: 'project',
    component: ProjectsDashboardComponent
  },
  {
    path: '**',
    component: BodyHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
