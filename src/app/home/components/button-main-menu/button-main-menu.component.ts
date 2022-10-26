import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-main-menu',
  templateUrl: './button-main-menu.component.html',
  styleUrls: ['./button-main-menu.component.css']
})
export class ButtonMainMenuComponent implements OnInit {
@Input() display: string = "";
@Input() icon: string = "";
@Input() classColorIcon: string = "";
@Input() class: string = "";
@Input() avatar: string = "";
@Input() actions: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
