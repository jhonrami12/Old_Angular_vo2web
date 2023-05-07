import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V2vUserAccountComponent } from './user-account.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: V2vUserAccountComponent,
  },
];

@NgModule({
  declarations: [V2vUserAccountComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [V2vUserAccountComponent],
})
export class V2vUserAccountModule {}
