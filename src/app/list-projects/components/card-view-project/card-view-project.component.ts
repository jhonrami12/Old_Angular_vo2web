import { Component, OnInit, Input } from '@angular/core';
import { V2vIProjectDefinition } from '../../interface/projects-definition.interface';

@Component({
  selector: 'v2v-card-view',
  templateUrl: './card-view-project.component.html',
  styleUrls: ['./card-view-project.component.scss'],
})
export class V2vCardViewProjectComponent implements OnInit {
  overlayVisible: boolean = false;

  @Input() projectsDefinition: V2vIProjectDefinition;

  ngOnInit(): void {}
}
