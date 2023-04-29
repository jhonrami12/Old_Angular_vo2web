import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
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

  ngOnInit(): void {
    this.translateChange();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }

  addNewFolder() {
    console.log(this.toast);
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

  private translateChange() {
    this.translateService.onLangChange
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.setMenuFilter();
      });
  }
}
