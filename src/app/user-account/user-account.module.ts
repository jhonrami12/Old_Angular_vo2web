import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccountComponent } from './user-account.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: UserAccountComponent,
  },
];

@NgModule({
  declarations: [UserAccountComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [UserAccountComponent],
})
export class UserAccountModule {}
