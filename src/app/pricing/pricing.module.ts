import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V2vPricingComponent } from './pricing.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: V2vPricingComponent,
  },
];

@NgModule({
  declarations: [V2vPricingComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [V2vPricingComponent],
})
export class V2vPricingModule {}
