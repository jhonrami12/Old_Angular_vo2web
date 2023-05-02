import { Component, Input, OnInit } from '@angular/core';
import { V2vIProjectDefinition } from '../../interface/projects-definition.interface';
import * as _ from 'lodash';
import { V2vIProject } from '../../interface/project.interface';

@Component({
  selector: 'app-folder-view-project',
  templateUrl: './folder-view-project.component.html',
  styleUrls: ['./folder-view-project.component.scss'],
})
export class FolderViewProjectComponent implements OnInit {
  @Input() projectsDefinition: V2vIProjectDefinition;
  foldersGrouped: any;
  foldersGroupedKeys: string[];
  showFolders: boolean = false;
  currentFolder: string;
  currentProjects: V2vIProject[];
  iconFolderClosed = '../../../../assets/svg/closed-folder-icon.svg';
  iconFolderOpen = '../../../../assets/svg/open-folder-icon.svg';

  constructor() {}

  ngOnInit(): void {
    console.log('FolderViewProjectComponent', this.projectsDefinition);
    this.groupProjectsByFolder();
  }

  selectFolder(folder: string) {
    this.currentFolder = folder;
    this.showFolders = true;
    this.currentProjects = this.foldersGrouped[folder];
  }

  private groupProjectsByFolder() {
    this.foldersGrouped = _.groupBy(
      this.projectsDefinition.projects,
      (p: V2vIProject) => p.folder
    );

    this.foldersGroupedKeys = Object.keys(this.foldersGrouped);
    console.log('this.foldersGrouped', this.foldersGrouped);
  }
}
