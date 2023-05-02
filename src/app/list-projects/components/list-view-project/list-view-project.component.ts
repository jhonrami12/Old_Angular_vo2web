import { Component, Input } from '@angular/core';
import { V2vIProjectDefinition } from '../../interface/projects-definition.interface';

@Component({
  selector: 'app-list-view-project',
  templateUrl: './list-view-project.component.html',
  styleUrls: ['./list-view-project.component.scss'],
})
export class ListViewProjectComponent {
  @Input() projectsDefinition: V2vIProjectDefinition;
}
