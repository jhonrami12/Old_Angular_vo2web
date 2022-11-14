import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css'],
})
export class SearchFieldComponent implements OnInit {
  @Input() placeholder: string = 'Search';
  @Output() onSearch = new EventEmitter<string>();

  currentSearch: string;

  constructor() {}

  ngOnInit(): void {}

  /**
   * Process the event when the user press a key in the field
   * @param event Evento of KeyPress
   */
  procKeyPress(event: KeyboardEvent) {
    const pattern = /[a-zA-Z0-9\s]+$/; //"^[a-zA-Z0-9]+$"
    let inputChar = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  /**
   * Method to process when has change the input
   * @param searchInp
   */
  prockeyUp(searchInp: HTMLInputElement, typeEvent: number) {
    if (this.currentSearch != searchInp.value) {
      this.currentSearch = searchInp.value;
      this.onSearch.emit(this.currentSearch);
    }
  }
}
