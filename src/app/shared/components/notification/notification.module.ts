import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { PrimengModule } from '../../modules/primeng.module';

@NgModule({
  declarations: [NotificationComponent],
  imports: [CommonModule, PrimengModule],
  exports: [NotificationComponent],
})
export class NotificationModule {}
