import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show-by-field',
  templateUrl: './show-by-field.component.html',
  styleUrls: ['./show-by-field.component.css'],
})
export class ShowByFieldComponent implements OnInit {
  @Output() onChangeShow = new EventEmitter<string>();

  showSelected: string;
  allowChange: boolean = true;

  constructor(private responsive: BreakpointObserver) {
    this.showSelected = '';
  }

  ngOnInit(): void {
    //by default firts in the list of options.
    this.showSelected = 'folder';
    this.responsive.observe(Breakpoints.XSmall)
      .subscribe(result => {

        if (result.matches) {
          this.allowChange = false;
          let hasChanges = this.showSelected == 'folder' ? true : false;
          this.showSelected = 'files';
          
          if(hasChanges)
            this.onChangeShow.emit(this.showSelected);
        }
        else
          this.allowChange = true;
    });
  }

  /**
   * Process the changes when the user clic in the button
   * @param showSelected String that indicate the type of show selected
   * @returns 
   */
  procChangeShow(showSelected: string) {
    if(!this.allowChange)
      return;
    this.showSelected = showSelected == 'folder' ? 'files' : 'folder';
    this.onChangeShow.emit(this.showSelected);
  }
}
