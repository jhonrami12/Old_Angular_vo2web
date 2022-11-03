import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-by-field',
  templateUrl: './sort-by-field.component.html',
  styleUrls: ['./sort-by-field.component.css']
})
export class SortByFieldComponent implements OnInit {
  sort = 'Date Asc';
  constructor() { }

  ngOnInit(): void {
  }

}
