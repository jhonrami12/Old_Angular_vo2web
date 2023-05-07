import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V2vUserComponent } from './user.component';
import { V2vPrimengModule } from '../shared/modules/primeng.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [V2vUserComponent],
  imports: [
    CommonModule,
    V2vPrimengModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
  ],
  exports: [V2vUserComponent],
})
export class V2vUserModule {}
