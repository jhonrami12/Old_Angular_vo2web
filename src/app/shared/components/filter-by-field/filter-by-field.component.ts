import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { MatMenu, MatMenuPanel } from '@angular/material/menu';
import { FilterDataModel } from '../../models/filter-data-model';
import { FiltersSelected } from '../../models/filters-selected';
import { NotificationMsgModel } from '../../models/notification-msg-model';

enum TypeMsg {
  message = 'Message',
  warn = 'Warning',
  error = 'Error',
  info = 'Information'
}

@Component({
  selector: 'app-filter-by-field',
  templateUrl: './filter-by-field.component.html',
  styleUrls: ['./filter-by-field.component.css']
})
export class FilterByFieldComponent implements OnInit {
  @Input() dataFilters: FilterDataModel[];
  @ViewChildren(MatMenu) components: QueryList<MatMenuPanel<any>> | undefined;
  @Output() notificationMsg = new EventEmitter<NotificationMsgModel>();
  @Output() changeFilter = new EventEmitter<FiltersSelected[]>();
  

  filterSelectedList: FiltersSelected[];

  constructor() { 
    this.dataFilters = [];
    this.filterSelectedList = [];
  };

  ngOnInit(): void {
  }

  onSelectNewFilter(category: FilterDataModel, childSelect: KeyValue<string,string>)
  {
    //we are not allow duplicate items.
    if(this.filterSelectedList.findIndex(el => el.childKey == childSelect.key) >=0)
    {
      //we remove the item selected again.
      this.remove(childSelect.key);
      this.changeFilter.emit(this.filterSelectedList);
      return;
    }
    
    if(this.filterSelectedList.length >=4)
    {
      this.notificationMsg.emit(new NotificationMsgModel('001',TypeMsg.message,'It is not possible to add more than 4 filters'));
      return;
    }

    let filSelec = new FiltersSelected();
    filSelec.parentKey = category.key;
    filSelec.parentValue = category.value;
    filSelec.parentIconName = category.iconName;
    filSelec.childKey = childSelect.key;
    filSelec.childValue = childSelect.value;

    this.filterSelectedList.push(filSelec);
    this.changeFilter.emit(this.filterSelectedList);
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
