import { Component, Input, OnInit } from '@angular/core';
import { V2vIProjectDefinition } from '../../interface/projects-definition.interface';
import { TreeNode } from 'primeng/api';
import * as _ from 'lodash';
import { V2vIProject } from '../../interface/project.interface';
import { TranslateService } from '@ngx-translate/core';
import { V2VISpeedDialDefinition } from 'src/app/shared/interface/speed-dial-interface';

@Component({
  selector: 'v2v-list-view-project',
  templateUrl: './list-view-project.component.html',
  styleUrls: ['./list-view-project.component.scss'],
})
export class V2vListViewProjectComponent implements OnInit {
  @Input() projectsDefinition: V2vIProjectDefinition;
  foldersGrouped: any;
  foldersGroupedKeys: string[];
  projectsTreeNode: TreeNode[] = [];
  cols: any[];
  nodesExpanded: string[] = [];
  speedialDefinition: V2VISpeedDialDefinition;
  currentProject: V2vIProject;

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.groupProjectsByFolder();
    this.setCols();
    this.setActions();
  }

  getIcon(node) {
    const { node: nodeKey } = node;
    return this.nodesExpanded.includes(nodeKey.key)
      ? '../../assets/svg/open-folder-icon.svg'
      : '../../assets/svg/closed-folder-icon.svg';
  }

  setProject(project) {
    this.currentProject = project;
  }

  nodeExpand(event) {
    this.nodesExpanded.push(event?.node?.key);
  }

  nodeCollapse(event) {
    this.nodesExpanded = this.nodesExpanded.filter(
      (node) => node !== event?.node?.key
    );
    console.log('nodesExpanded', this.nodesExpanded);
  }

  private groupProjectsByFolder() {
    this.foldersGrouped = _.groupBy(
      this.projectsDefinition.projects,
      (p: V2vIProject) => p.folder
    );

    this.foldersGroupedKeys = Object.keys(this.foldersGrouped);
    this.foldersGroupedKeys.forEach((folder, index) => {
      const projects = this.foldersGrouped[folder].map(
        (project, indexProject) => {
          return {
            key: `${index}-${indexProject}`,
            data: project,
          };
        }
      );

      const node: TreeNode = {
        key: `${index}`,
        data: {
          name: folder,
          description: '',
          mediaType: '',
          tags: [],
        },
        children: projects,
      };

      this.projectsTreeNode.push(node);
    });
  }

  private setCols() {
    this.cols = [
      { field: 'name', header: this.translateService.instant('project.name') },
      {
        field: 'description',
        header: this.translateService.instant('project.description'),
      },
      {
        field: 'mediaType',
        header: this.translateService.instant('project.mediaType'),
      },
      {
        field: 'tags',
      },
    ];
  }

  private setActions() {
    const items = [];
    this.projectsDefinition.actions.forEach((a) => {
      items.push({
        icon: a.icon,
        tooltipOptions: {
          tooltipLabel: this.translateService.instant(a.label),
        },
        command: () => {
          a.action(this.currentProject);
        },
      });
    });

    this.speedialDefinition = {
      items,
      direction: 'left',
      hideIcon: 'pi pi-times',
      showIcon: 'pi pi-bars',
    };
  }
}
