import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {

  @Input() folders: string[];

  constructor() { 
    this.folders = [];
    this.folders = ['Project','English','Preacher'];
  }

  ngOnInit(): void {
  }

}
