import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';
import { BreadCrumbService } from '../../services/bread-crumb.service';
import { Observable, takeUntil, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { BreadCrumb } from '../../models/bread-crumb-model';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'v2v-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss'],
})
export class V2vBreadCrumbComponent implements OnDestroy {
  @Output()
  onItemSelected: EventEmitter<string> = new EventEmitter<string>();
  breadCrumbs$: Observable<BreadCrumb[]>;
  items: MenuItem[];
  unsubscribe: Subject<any> = new Subject<any>();
  home: MenuItem;

  constructor(private readonly breadCrumbService: BreadCrumbService) {
    this.home = { icon: 'pi pi-home', routerLink: '/dashboard' };
    this.breadCrumbService.breadCrumbs$
      .pipe(
        takeUntil(this.unsubscribe),
        map((breadcrumbs) =>
          breadcrumbs.map((b) => ({
            label: b.label,
            routerLink: b.url,
          }))
        )
      )
      .subscribe((breadcrumbs) => {
        this.items = breadcrumbs;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
  }

  onItemClick(event) {
    console.log(event);
    this.onItemSelected.emit(event.item.routerLink);
  }
}
