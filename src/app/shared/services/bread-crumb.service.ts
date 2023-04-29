import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { BreadCrumb } from '../models/bread-crumb-model';
import {
  ActivatedRouteSnapshot,
  Data,
  NavigationEnd,
  Router,
} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class BreadCrumbService {
  private readonly _breadCrumb$ = new BehaviorSubject<BreadCrumb[]>([]);

  readonly breadCrumbs$ = this._breadCrumb$.asObservable();

  constructor(
    private router: Router,
    private translateService: TranslateService
  ) {
    this.routerChanges();
  }

  private routerChanges() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const root = this.router.routerState.snapshot.root;
        const breadcrumbs: BreadCrumb[] = [];
        this.addBreadCrumb(root, [], breadcrumbs);
        this._breadCrumb$.next(breadcrumbs);
      });
  }

  private addBreadCrumb(
    route: ActivatedRouteSnapshot,
    parentUrl: string[],
    breadCrumbs: BreadCrumb[]
  ) {
    if (route) {
      const routeUrl = parentUrl.concat(route.url.map((url) => url.path));
      if (route.data['breadCrumb']) {
        const breadcrumb = {
          label: this.getLabel(route.data),
          url: '/' + routeUrl.join('/'),
        };

        if (breadCrumbs.some((b) => b.url === breadcrumb.url)) return;
        breadCrumbs.push(breadcrumb);
      }

      this.addBreadCrumb(route.firstChild, routeUrl, breadCrumbs);
    }
  }

  private getLabel(data: Data | any) {
    return this.translateService.instant(`dashboard.${data.breadCrumb}`);
  }
}
