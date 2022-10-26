import { Component, OnInit } from '@angular/core';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  onClicMenu(obj: MatDrawer)
  {
      if(obj)
        obj.open();
  }

}
