import { KeyValue } from '@angular/common';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { MatMenu, MatMenuPanel } from '@angular/material/menu';
import { FilterDataModel } from '../../models/filter-data-model';
import { FiltersSelected } from '../../models/filters-selected';


@Component({
  selector: 'app-filter-by-field',
  templateUrl: './filter-by-field.component.html',
  styleUrls: ['./filter-by-field.component.css']
})
export class FilterByFieldComponent implements OnInit {
  @Input() dataFilters: FilterDataModel[];
  @ViewChildren(MatMenu) components: QueryList<MatMenuPanel<any>> | undefined;
  @Output() onMessages = new EventEmitter<KeyValue<string,string>>();
  @Output() onChangeFilter = new EventEmitter<FiltersSelected[]>();
  

  filterSelectedList: FiltersSelected[];
  limitFilter: number;

  constructor(private responsive: BreakpointObserver) { 
    this.dataFilters = [];
    this.filterSelectedList = [];
    this.limitFilter = 4;
  };

  ngOnInit(): void {
    
    this.responsive.observe(Breakpoints.XSmall)
      .subscribe(result => {

        if (result.matches) {
          this.limitFilter = 2;
          let hasChanges = false;
          while(this.filterSelectedList.length > this.limitFilter)
          {
            this.filterSelectedList.pop();
            hasChanges = true;
          }
          if(hasChanges)
            this.onChangeFilter.emit(this.filterSelectedList);
        }
        else{
          this.limitFilter = 4;
        }
    });
    
  }

  onSelectNewFilter(category: FilterDataModel, childSelect: KeyValue<string,string>)
  {
    //we are not allow duplicate items.
    if(this.filterSelectedList.findIndex(el => el.childKey == childSelect.key) >=0)
    {
      //we remove the item selected again.
      this.remove(childSelect.key);
      this.onChangeFilter.emit(this.filterSelectedList);
      return;
    }
    
    if(this.filterSelectedList.length >= this.limitFilter)
    {
      this.onMessages.emit( { 'key':'001', 'value': `It is not possible to add more than ${this.limitFilter} filters`} );
      return;
    }

    let filSelec = new FiltersSelected();
    filSelec.parentKey = category.key;
    filSelec.parentValue = category.value;
    filSelec.parentIconName = category.iconName;
    filSelec.childKey = childSelect.key;
    filSelec.childValue = childSelect.value;

    this.filterSelectedList.push(filSelec);
    this.onChangeFilter.emit(this.filterSelectedList);
  }

  isChildSelected(child: string)
  {
      return this.filterSelectedList.findIndex(el => el.childKey == child) >=0
  }

  remove(filteSel: string): void {
    const index = this.filterSelectedList.findIndex(el => el.childKey == filteSel);

    if (index >= 0) {
      this.filterSelectedList.splice(index, 1);
    }
  }

}
