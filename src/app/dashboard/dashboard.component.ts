import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  sidebarVisible: boolean = true;
  showHome: boolean = true;

  itemsSidebar = [];
  constructor(
    private translateService: TranslateService,
    private router: Router
  ) {
    this.setItemsSidebar();
  }

  navigate(url) {
    this.showHome = url === '/dashboard' ? true : false;
    this.router.navigate([url]);
    this.sidebarVisible = false;
  }

  private setItemsSidebar() {
    this.itemsSidebar = [
      {
        img: '../../assets/svg/home.svg',
        label: this.translateService.instant('dashboard.home'),
        page: '/dashboard',
      },
      {
        img: '../../assets/svg/folder-menu.svg',
        label: this.translateService.instant('dashboard.projects'),
        page: '/dashboard/list-projects',
      },
    ];
  }
}
