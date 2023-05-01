import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

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
    private toast: ToastrService
  ) {
    this.setMenuFilter();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }

  addNewFolder() {
    this.toast.success('Hello world!', 'Toastr fun!');
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
