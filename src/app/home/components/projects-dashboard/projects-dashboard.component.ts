import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-dashboard',
  templateUrl: './projects-dashboard.component.html',
  styleUrls: ['./projects-dashboard.component.css']
})
export class ProjectsDashboardComponent implements OnInit {
  public value: string = ' ';
  constructor() { }

  ngOnInit(): void {
  }

}
