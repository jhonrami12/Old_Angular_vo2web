import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FilterDataModel } from 'src/app/shared/models/filter-data-model';
import { SimpleAlertModel } from 'src/app/shared/models/simple-alert-model';
import { SimpleAlertService } from 'src/app/shared/services/simple-alert.service';

@Component({
  selector: 'app-projects-dashboard',
  templateUrl: './projects-dashboard.component.html',
  styleUrls: ['./projects-dashboard.component.css']
})
export class ProjectsDashboardComponent implements OnInit {
  public value: string = ' ';
  public displayOpts: any[] = [
    {value: 'allRoutes', viewValue: 'All routes'},
    {value: 'byFolders', viewValue: 'By folder'}
  ]
  selected = 'allRoutes';
  
  dataFilters: FilterDataModel[];

  constructor(private simpleAlertServ: SimpleAlertService) { 
    this.dataFilters = [
      {
        key: 'languages',
        value: 'languages',
        iconName: 'translate',
        childs: [ {key: 'english',value: 'English'},
                  {key: 'spanish',value: 'Spanish'},
                  {key: 'italian',value: 'Italian'},
                  {key: 'french',value: 'French'}
                ]
      },
      {
        key: 'media',
        value: 'Media',
        iconName: 'video_library',
        childs: [ {key: 'audio',value: 'Audio'},
                  {key: 'Video',value: 'Video'}
        ]
      }
    ];

  }

  processNotification(notif: KeyValue<string,string>)
  {
    this.simpleAlertServ.showNotif(new SimpleAlertModel(notif.key,notif.value,'Warning'));

    console.log('new Notification');
    console.log(notif);
  }

  ngOnInit(): void {
  }

}
