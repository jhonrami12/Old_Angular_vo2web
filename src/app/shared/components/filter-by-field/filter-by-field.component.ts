import { KeyValue } from '@angular/common';
import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
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

  filterSelectedList: FiltersSelected[];
  constructor() { 
    this.dataFilters = [];
    this.filterSelectedList = [];

    this.dataFilters = [
      {
        value: 'languages',
        display: 'languages',
        iconName: 'translate',
        childs: [ {key: 'english',value: 'English'},
                  {key: 'spanish',value: 'Spanish'},
                  {key: 'italian',value: 'Italian'},
                  {key: 'french',value: 'French'}
                ]
      },
      {
        value: 'media',
        display: 'Media',
        iconName: 'video_library',
        childs: [ {key: 'audio',value: 'Audio'},
                  {key: 'Video',value: 'Video'}
        ]
      }
    ]
  };

  ngOnInit(): void {
  }

  onSelectNewFilter(category: FilterDataModel, childSelect: KeyValue<string,string>)
  {
    console.log('biemp');
    let filSelec = new FiltersSelected();
    filSelec.parentValue = category.value;
    filSelec.parentDisplay = category.display;
    filSelec.parentIconName = category.iconName;
    filSelec.childValue = childSelect.key;
    filSelec.childDisplay = childSelect.value;
    
    this.filterSelectedList.push(filSelec);
  }

}
