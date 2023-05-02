import { Component, OnInit, Input } from '@angular/core';
import { V2vIProjectDefinition } from '../../interface/projects-definition.interface';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view-project.component.html',
  styleUrls: ['./card-view-project.component.scss'],
})
export class CardViewProjectComponent implements OnInit {
  overlayVisible: boolean = false;

  @Input() projectsDefinition: V2vIProjectDefinition;

  ngOnInit(): void {}
}
