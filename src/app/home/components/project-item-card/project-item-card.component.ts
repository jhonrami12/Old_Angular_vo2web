import { Component, Input, OnInit } from '@angular/core';
import { ProjectItem } from '../../models/project-item';

@Component({
  selector: 'app-project-item-card',
  templateUrl: './project-item-card.component.html',
  styleUrls: ['./project-item-card.component.css']
})
export class ProjectItemCardComponent implements OnInit {
  @Input() projectItem: ProjectItem = new ProjectItem();

  constructor() { }

  ngOnInit(): void {
  }

}
