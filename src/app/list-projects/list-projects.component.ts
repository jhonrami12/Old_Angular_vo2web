import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from './services/project.service';
import { V2vIProjectDefinition } from './interface/projects-definition.interface';
import getButton from '../shared/functions/get-button';
import { V2vIProject } from './interface/project.interface';
import { V2vIAction } from '../shared/interface/action.interface';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss'],
})
export class ListProjectsComponent implements OnDestroy, OnInit {
  items: MenuItem[];
  itemsView: MenuItem[] = [];
  unsubscribe: Subject<void> = new Subject();
  overlayVisible: boolean = false;
  viewType = 'card';

  projectsDefinition: V2vIProjectDefinition;

  constructor(
    private translateService: TranslateService,
    private toast: ToastrService,
    private projectService: ProjectService
  ) {
    this.setMenuFilter();
  }

  ngOnInit(): void {
    this.setProjectDefinition();
    this.getView();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }

  addNewFolder() {
    this.toast.success('Hello world!', 'Toastr fun!');
  }

  private async setProjectDefinition() {
    const actions = this.getActions();
    this.projectsDefinition = await this.projectService.getProjectsDefinition({
      userId: '1',
      actions,
    });
    console.log('this.projectsDefinition', this.projectsDefinition);
  }

  private getView() {
    const listButton = getButton('list');
    const folderButton = getButton('folder');
    const cardButton = getButton('card');

    this.itemsView = [
      {
        icon: cardButton.icon,
        command: () => {
          this.viewType = 'card';
        },
        tooltipOptions: {
          tooltipLabel: this.translateService.instant('dashboard.viewAsCard'),
          tooltipPosition: 'bottom',
        },
      },
      {
        icon: listButton.icon,
        command: () => {
          this.viewType = 'list';
        },
        tooltipOptions: {
          tooltipLabel: this.translateService.instant('dashboard.viewAsList'),
          tooltipPosition: 'bottom',
        },
      },
      {
        icon: folderButton.icon,
        command: () => {
          this.viewType = 'folder';
        },
        tooltipOptions: {
          tooltipLabel: this.translateService.instant('dashboard.viewAsFolder'),
          tooltipPosition: 'bottom',
        },
      },
    ];
  }

  private getActions(): V2vIAction[] {
    return [
      {
        ...getButton('properties'),
        action: (project: V2vIProject) => this.editProject(project),
      },
      {
        ...getButton('preview'),
        action: (project: V2vIProject) => this.previweProject(project),
      },
      {
        ...getButton('download'),
        action: (project: V2vIProject) => this.downloadProject(project),
      },
      {
        ...getButton('archive'),
        action: (project: V2vIProject) => this.archiveProject(project),
      },
      {
        ...getButton('copy'),
        action: (project: V2vIProject) => this.copyProject(project),
      },
    ];
  }

  private previweProject(project: V2vIProject) {
    console.log('previweProject', project);
  }
  private downloadProject(project: V2vIProject) {
    console.log('downloadProject', project);
  }
  private renameProject(project: V2vIProject) {
    console.log('renameProject', project);
  }
  private archiveProject(project: V2vIProject) {
    console.log('archiveProject', project);
  }
  private copyProject(project: V2vIProject) {
    console.log('copyProject', project);
  }
  private deleteProject(project: V2vIProject) {
    console.log('deleteProject', project);
  }
  private editProject(project: V2vIProject) {
    console.log('editProject', project);
  }

  private setMenuFilter() {
    this.items = [
      {
        label: '',
        icon: 'pi pi-filter',
        items: [
          {
            label: this.translateService.instant('dashboard.language'),
            icon: 'pi pi-language',
            items: [
              {
                label: 'Spanish',
              },
            ],
          },
        ],
      },
    ];
  }
}
