import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyHomeComponent } from './components/body-home/body-home.component';
import { ProjectsDashboardComponent } from './components/projects-dashboard/projects-dashboard.component';

const routes: Routes = [
  {
    path: 'home',
    component: BodyHomeComponent,
  },
  {
    path: 'projects',
    component: ProjectsDashboardComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
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
