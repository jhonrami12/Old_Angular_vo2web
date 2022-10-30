import { Component, OnInit } from '@angular/core';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  public openCloseMenu = "chevron_left";

  ngOnInit(): void {
    
  }

  onClicMenu(obj: MatDrawer)
  {
      if(obj) {
        obj.toggle();
        this.openCloseMenu = obj.opened ? "chevron_left" : "chevron_right" 
      }
  }
}
