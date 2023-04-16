import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { NotificationService } from '../shared/services/notification.service';
import { TypeMessage } from '../shared/models/constants';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss'],
})
export class ListProjectsComponent implements OnDestroy, OnInit {
  items: MenuItem[];
  unsubscribe: Subject<void> = new Subject();

  constructor(
    private translateService: TranslateService,
    private notificationService: NotificationService
  ) {
    this.setMenuFilter();
  }

  ngOnInit(): void {
    this.translateChange();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }

  addNewFolder() {
    this.notificationService.createMessage(
      TypeMessage.Error,
      'Folder Added correctly sdasda asdasd asdasd'
    );
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

  private translateChange() {
    this.translateService.onLangChange
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.setMenuFilter();
      });
  }
}
