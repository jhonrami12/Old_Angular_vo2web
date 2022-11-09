import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show-by-field',
  templateUrl: './show-by-field.component.html',
  styleUrls: ['./show-by-field.component.css'],
})
export class ShowByFieldComponent implements OnInit {
  @Output() onChanceShow = new EventEmitter<string>();

  showSelected: string;

  constructor() {
    this.showSelected = '';
  }

  ngOnInit(): void {
    //by default firts in the list of options.
    this.showSelected = 'folder';
  }

  procChangeShow(sortSelected: string) {
    this.showSelected = sortSelected == 'folder' ? 'files' : 'folder';
    // this.onChanceSort.emit(this.sortSelected);
  }
}
