import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SortSelectedModel } from '../../models/sort-selected-model';

@Component({
  selector: 'app-sort-by-field',
  templateUrl: './sort-by-field.component.html',
  styleUrls: ['./sort-by-field.component.css'],
})
export class SortByFieldComponent implements OnInit {
  sortSelected: SortSelectedModel;
  @Input() sortByData: KeyValue<string, string>[] | undefined;
  @Output() onChanceSort = new EventEmitter<SortSelectedModel>();

  constructor() {
    this.sortSelected = new SortSelectedModel();
  }

  ngOnInit(): void {}

  procChangeOrd(sortSelected: KeyValue<string, string>) {
    this.sortSelected.key = sortSelected.key;
    this.sortSelected.value = sortSelected.value;
    this.sortSelected.ord = 'asc';

    this.onChanceSort.emit(this.sortSelected);
  }
}
