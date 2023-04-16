import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { ProgressBarModule } from 'primeng/progressbar';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { AvatarModule } from 'primeng/avatar';
import { OverlayModule } from 'primeng/overlay';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    PasswordModule,
    ProgressBarModule,
    SidebarModule,
    ToastModule,
    MenubarModule,
    MenuModule,
    DividerModule,
    AvatarModule,
    TooltipModule,
    OverlayModule,
  ],
  exports: [
    CardModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    PasswordModule,
    ProgressBarModule,
    SidebarModule,
    MenubarModule,
    ToastModule,
    MenuModule,
    DividerModule,
    TooltipModule,
    AvatarModule,
    OverlayModule,
  ],
})
export class PrimengModule {}
