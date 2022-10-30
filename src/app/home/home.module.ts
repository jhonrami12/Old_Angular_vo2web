import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material Import
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input'
//Import own module
import {HomeRoutingModule } from './home-routing.module';
import {HomeComponent } from './home.component';
import {SharedModule } from '../shared/shared.module';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import { ButtonMainMenuComponent } from './components/button-main-menu/button-main-menu.component';
import { BodyHomeComponent } from './components/body-home/body-home.component';
import { ProjectsDashboardComponent } from './components/projects-dashboard/projects-dashboard.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainMenuComponent,
    ButtonMainMenuComponent,
    BodyHomeComponent,
    ProjectsDashboardComponent
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
    MatInputModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
