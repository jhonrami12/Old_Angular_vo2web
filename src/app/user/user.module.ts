import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { PrimengModule } from '../shared/modules/primeng.module';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, PrimengModule],
  exports: [UserComponent],
})
export class UserModule {}
