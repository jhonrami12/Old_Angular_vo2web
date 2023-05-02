import { Component, HostListener } from '@angular/core';
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
  currentPage: string;
  showOptions: boolean = true;

  itemsSidebar = [];
  itemsMenu = [];

  @HostListener('window:resize', [])
  onResize() {
    this.showOptions = window.innerWidth > 768;
  }

  constructor(
    private translateService: TranslateService,
    private router: Router
  ) {
    this.showOptions = window.innerWidth > 768;
    this.setItemsSidebar();
    this.setItemsMenu();
    this.currentPage = this.router.url;
    this.showHome = this.router.url === '/dashboard';
  }

  navigate(url) {
    this.currentPage = url.page;
    this.showHome = this.currentPage === '/dashboard';
    this.router.navigate([this.currentPage]);
    this.sidebarVisible = false;
  }

  onSelectedUser(event) {
    this.showHome = event === '/dashboard';
    this.currentPage = event;
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
        page: '/dashboard/projects',
      },
    ];
  }

  private setItemsMenu() {
    this.itemsMenu = [
      {
        img: '../../assets/svg/help-faq.svg',
        imgWhite: '../../assets/svg/help-faq-white.svg',
        label: this.translateService.instant('dashboard.help'),
        page: '/dashboard/help',
      },
      {
        img: '../../assets/svg/documentation-icon.svg',
        imgWhite: '../../assets/svg/documentation-icon-white.svg',
        label: this.translateService.instant('dashboard.documentation'),
        page: '/dashboard/documentation',
      },
      {
        img: '../../assets/svg/question-icon.svg',
        imgWhite: '../../assets/svg/question-icon-white.svg',
        label: this.translateService.instant('dashboard.questions'),
        page: '/dashboard/questions',
      },
      {
        img: '../../assets/svg/plan-icon.svg',
        imgWhite: '../../assets/svg/plan-icon-white.svg',
        label: this.translateService.instant('dashboard.pricing'),
        page: '/dashboard/pricing',
      },
    ];
  }
}
