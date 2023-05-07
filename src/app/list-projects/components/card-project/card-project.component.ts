import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { V2vIProject } from 'src/app/list-projects/interface/project.interface';
import { V2vIAction } from 'src/app/shared/interface/action.interface';
import { TranslateService } from '@ngx-translate/core';
import { V2VISpeedDialDefinition } from 'src/app/shared/interface/speed-dial-interface';

@Component({
  selector: 'v2v-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss'],
})
export class V2vCardProjectComponent implements OnInit {
  overlayVisible: boolean = false;
  speedialDefinition: V2VISpeedDialDefinition;

  @Input() project: V2vIProject;
  @Input() actions: V2vIAction[];

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.setActions();
  }

  private setActions() {
    const items = [];
    this.actions.forEach((a) => {
      items.push({
        icon: a.icon,
        tooltipOptions: {
          tooltipLabel: this.translateService.instant(a.label),
        },
        command: () => {
          a.action(this.project);
        },
      });
    });

    this.speedialDefinition = {
      items,
      direction: 'down',
      hideIcon: 'pi pi-times',
      showIcon: 'pi pi-bars',
    };
  }
}
