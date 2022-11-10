import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Import Material Module
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
//Import own module
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
//Import own Component
import { HomeComponent } from './home.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ButtonMainMenuComponent } from './components/button-main-menu/button-main-menu.component';
import { BodyHomeComponent } from './components/body-home/body-home.component';
import { ProjectsDashboardComponent } from './components/projects-dashboard/projects-dashboard.component';
import { ProjectItemListComponent } from './components/project-item-list/project-item-list.component';
import { ProjectItemCardComponent } from './components/project-item-card/project-item-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainMenuComponent,
    ButtonMainMenuComponent,
    BodyHomeComponent,
    ProjectsDashboardComponent,
    ProjectItemListComponent,
    ProjectItemCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
