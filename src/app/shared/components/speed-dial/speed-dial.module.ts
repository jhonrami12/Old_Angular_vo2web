import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V2vSpeedDialComponent } from './speed-dial.component';
import { SpeedDialModule } from 'primeng/speeddial';

@NgModule({
  declarations: [V2vSpeedDialComponent],
  imports: [CommonModule, SpeedDialModule],
  exports: [V2vSpeedDialComponent],
})
export class V2vSpeedDialModule {}
