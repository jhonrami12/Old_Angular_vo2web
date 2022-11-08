import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SortSelectedModel } from '../../models/sort-selected-model';

@Component({
  selector: 'app-sort-by-field',
  templateUrl: './sort-by-field.component.html',
  styleUrls: ['./sort-by-field.component.css'],
})
export class SortByFieldComponent implements OnInit {
  @Input() sortByData: KeyValue<string, string>[] | undefined;
  @Output() onChanceSort = new EventEmitter<SortSelectedModel>();

  sortSelected: SortSelectedModel;
  sortAsc: string;

  constructor() {
    this.sortSelected = new SortSelectedModel();
    this.sortAsc = 'asc';    
  }

  ngOnInit(): void {
    //by default firts in the list of options.
    this.sortSelected.key = this.sortByData![0].key;
    this.sortSelected.value = this.sortByData![0].value;
    this.sortAsc = 'asc';
  }

  procChangeSort(sortSelected: KeyValue<string, string>) {
    this.sortSelected.key = sortSelected.key;
    this.sortSelected.value = sortSelected.value;
    this.sortSelected.ord = this.sortAsc;

    this.onChanceSort.emit(this.sortSelected);
  }

  procChangeSortDirec(event: any)
  {
    this.sortAsc = this.sortAsc == 'asc' ? 'desc' : 'asc';
    this.sortSelected.ord = this.sortAsc;
    this.onChanceSort.emit(this.sortSelected);
  }
}
