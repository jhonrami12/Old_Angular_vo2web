import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { PrimengModule } from '../shared/modules/primeng.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    PrimengModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
  ],
  exports: [UserComponent],
})
export class UserModule {}
