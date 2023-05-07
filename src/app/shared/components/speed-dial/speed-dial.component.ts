import { Component, Input } from '@angular/core';
import { V2VISpeedDialDefinition } from '../../interface/speed-dial-interface';

@Component({
  selector: 'v2v-speed-dial',
  templateUrl: './speed-dial.component.html',
  styleUrls: ['./speed-dial.component.scss'],
})
export class V2vSpeedDialComponent {
  @Input() V2vSpeedDialDefinition: V2VISpeedDialDefinition;
}
