import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FilterDataModel } from 'src/app/shared/models/filter-data-model';
import { FiltersSelected } from 'src/app/shared/models/filters-selected';
import { SimpleAlertModel } from 'src/app/shared/models/simple-alert-model';
import { SortSelectedModel } from 'src/app/shared/models/sort-selected-model';
import { SimpleAlertService } from 'src/app/shared/services/simple-alert.service';

@Component({
  selector: 'app-projects-dashboard',
  templateUrl: './projects-dashboard.component.html',
  styleUrls: ['./projects-dashboard.component.css'],
})
export class ProjectsDashboardComponent implements OnInit {
  dataFilters: FilterDataModel[];
  sortBy: KeyValue<string,string>[];

  filterSelected: FiltersSelected[];

  constructor(private simpleAlertServ: SimpleAlertService) {
    this.filterSelected = [];

    this.sortBy = [
      { 'key':'nameProj', 'value': 'Name Project'},
      { 'key':'editedDate', 'value': 'Edition date'},
      { 'key':'creationDate', 'value': 'Creation date'}
    ];

    this.dataFilters = [
      {
        key: 'languages',
        value: 'languages',
        iconName: 'translate',
        childs: [
          { key: 'english', value: 'English' },
          { key: 'spanish', value: 'Spanish' },
          { key: 'italian', value: 'Italian' },
          { key: 'french', value: 'French' },
        ],
      },
      {
        key: 'media',
        value: 'Media',
        iconName: 'video_library',
        childs: [
          { key: 'audio', value: 'Audio' },
          { key: 'Video', value: 'Video' },
        ],
      },
    ];
  }

  processNotification(notif: KeyValue<string, string>): void {
    this.simpleAlertServ.showNotif(
      new SimpleAlertModel(notif.key, notif.value, 'Warning')
    );
  }

  procChangFilter(filSelected: FiltersSelected[]) {
    this.filterSelected = filSelected;
    console.log(filSelected);
  }

  procChangeSort(sortSel: SortSelectedModel)
  {
    console.log(sortSel);
  }

  ngOnInit(): void {}
}
