import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PricingComponent,
  },
];

@NgModule({
  declarations: [PricingComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [PricingComponent],
})
export class PricingModule {}
