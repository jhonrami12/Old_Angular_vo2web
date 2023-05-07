import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V2vHelpComponent } from './help.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: V2vHelpComponent,
  },
];

@NgModule({
  declarations: [V2vHelpComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [V2vHelpComponent],
})
export class V2vHelpModule {}
