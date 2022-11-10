import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-grid',
  templateUrl: './view-grid.component.html',
  styleUrls: ['./view-grid.component.css'],
})
export class ViewGridComponent implements OnInit {
  @Output() onChangeView = new EventEmitter<string>();

  viewSelected: string;

  constructor() {
    this.viewSelected = 'grid';
  }

  ngOnInit(): void {}

  procChangeView(viewSelected: string) {
    this.viewSelected = viewSelected == 'grid' ? 'row' : 'grid';
    this.onChangeView.emit(this.viewSelected);
  }
}
