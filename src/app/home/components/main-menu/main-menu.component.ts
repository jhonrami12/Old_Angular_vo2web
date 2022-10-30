import { Component, OnInit, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  @Input() drawerPanel: MatDrawer | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  onClicMenu()
  {
      if(this.drawerPanel)
        this.drawerPanel.toggle();
  }

  onClicActMenu(nameAction: string)
  {
    let action = '/'+nameAction;
    this.router.navigate([action]);
      
    console.log('action Menu');

  }

}
