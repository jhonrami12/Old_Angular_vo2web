import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { V2vIProject } from 'src/app/list-projects/interface/project.interface';
import { V2vIAction } from 'src/app/shared/interface/action.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss'],
})
export class CardProjectComponent implements OnInit {
  overlayVisible: boolean = false;
  items: MenuItem[] = [];

  @Input() project: V2vIProject;
  @Input() actions: V2vIAction[];

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    console.log('project', this.project);
    this.setActions();
  }

  private setActions() {
    this.actions.forEach((a) => {
      this.items.push({
        icon: a.icon,
        tooltipOptions: {
          tooltipLabel: this.translateService.instant(a.label),
        },
        command: () => {
          a.action(this.project);
        },
      });
    });
  }
}
