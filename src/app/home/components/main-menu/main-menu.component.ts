import { Component, OnInit, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  @Input() drawerPanel: MatDrawer | undefined;

  constructor() { }

  ngOnInit(): void {
    
  }

  onClicMenu()
  {
      if(this.drawerPanel)
        this.drawerPanel.toggle();
  }

}
