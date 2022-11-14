import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FilterDataModel } from 'src/app/shared/models/filter-data-model';
import { FiltersSelected } from 'src/app/shared/models/filters-selected';
import { SimpleAlertModel } from 'src/app/shared/models/simple-alert-model';
import { SortSelectedModel } from 'src/app/shared/models/sort-selected-model';
import { SimpleAlertService } from 'src/app/shared/services/simple-alert.service';
import { ProjectItem } from '../../models/project-item';

@Component({
  selector: 'app-projects-dashboard',
  templateUrl: './projects-dashboard.component.html',
  styleUrls: ['./projects-dashboard.component.css'],
})
export class ProjectsDashboardComponent implements OnInit {
  dataFilters: FilterDataModel[] = [];
  dataSortBy: KeyValue<string, string>[] = [];
  
  dataProjectItem: ProjectItem[] = [];
  _originalDataPrItem:ProjectItem[] = [];

  filterSelected: FiltersSelected[];
  sortSelected: SortSelectedModel;
  showBySelected: string;
  viewGridSelected: string;

  currentFolders: string[];

  constructor(private simpleAlertServ: SimpleAlertService) {
    this.filterSelected = [];
    this.sortSelected = new SortSelectedModel();
    this.showBySelected = 'folder';
    this.viewGridSelected = 'grid';
    this.currentFolders = [];
  }

  ngOnInit(): void {
    //Data to populate de sort-field, this data should obtain from services
    this.dataSortBy = [
      { key: '_nameProj', value: 'Project name' },
      { key: '_editedDate', value: 'Edition date' },
      { key: '_creationDate', value: 'Creation date' },
    ];

    //Data to populate the filter-field this data should obtain from services
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
      {
        key: 'features',
        value: 'Features',
        iconName: 'extension',
        childs: [
          { key: 'transcribe', value: 'Transcribe' },
          { key: 'translate', value: 'Translate' },
          { key: 'dubbling', value: 'Dubbling' },
        ],
      },
    ];

    //Data to populate the project-item, this data should obtain from services
    this.dataProjectItem = [
      {
        id: 1,
        typeItem: 'folder',
        imgCover: '',
        nameProjectItem: 'Predicas',
        path: '',
        originalLanguaje: '',
        targetLanguaje: '',
        media: '',
        features: [],
      },
      {
        id: 2,
        typeItem: 'folder',
        imgCover: '',
        nameProjectItem: 'John_MacArthur_In English Conference',
        path: 'Predicas',
        originalLanguaje: '',
        targetLanguaje: '',
        media: '',
        features: [],
      },
      {
        id: 3,
        typeItem: 'folder',
        imgCover: '',
        nameProjectItem: 'Apologia',
        path: 'Predicas',
        originalLanguaje: '',
        targetLanguaje: '',
        media: '',
        features: [],
      },
      {
        id: 4,
        typeItem: 'item',
        imgCover: '/assets/img/dataDemo/Portada01.jpg',
        nameProjectItem: 'Predica Irish Church',
        path: 'Predicas',
        originalLanguaje: '_english',
        targetLanguaje: '_spanish',
        media: '_audio',
        features: ['_transcribe', '_translate'],
      },
      {
        id: 5,
        typeItem: 'item',
        imgCover: '/assets/img/dataDemo/Portada02.jpg',
        nameProjectItem: 'Damer Part02',
        path: 'Predicas',
        originalLanguaje: '_english',
        targetLanguaje: '_french',
        media: '_video',
        features: ['_transcribe', '_translate', '_dubbling'],
      },
      {
        id: 6,
        typeItem: 'item',
        imgCover: '/assets/img/dataDemo/Portada03.jpg',
        nameProjectItem: 'The Christian Context For Samson',
        path: 'Predicas',
        originalLanguaje: '_english',
        targetLanguaje: '_italian',
        media: '_video',
        features: ['_transcribe', '_translate', '_dubbling'],
      },
      {
        id: 7,
        typeItem: 'item',
        imgCover: '/assets/img/dataDemo/Portada04.jpg',
        nameProjectItem: 'The christ of the covenant',
        path: 'Predicas',
        originalLanguaje: '_english',
        targetLanguaje: '_italian',
        media: '_video',
        features: ['_transcribe', '_translate', '_dubbling'],
      },
      {
        id: 8,
        typeItem: 'item',
        imgCover: '/assets/img/dataDemo/Portada05.jpg',
        nameProjectItem: 'Affectionaty Crhistianity',
        path: '',
        originalLanguaje: '_english',
        targetLanguaje: '_spanish',
        media: '_video',
        features: ['_transcribe', '_translate'],
      },
      {
        id: 9,
        typeItem: 'item',
        imgCover: '/assets/img/dataDemo/Portada06.jpg',
        nameProjectItem: 'Rise of Liberalism',
        path: 'Predicas/Apologia',
        originalLanguaje: '_english',
        targetLanguaje: '_french',
        media: '_video',
        features: ['_transcribe']
      },
    ];

    this._originalDataPrItem = this.dataProjectItem;

    this.appyFilter();
  }

  /**
   * Methos that process a new Notification
   * @param notif Notification
   */
   procNotification(notif: KeyValue<string, string>): void {
    this.simpleAlertServ.showNotif(
      new SimpleAlertModel(notif.key, notif.value, 'Warning')
    );
  }

  /**
   * Method that it is executed when change the filter in the dashboard.
   * @param filSelected list of Filter selected
   */
  procChangFilter(filSelected: FiltersSelected[]) {
    this.filterSelected = filSelected;
    console.log(filSelected);
  }

  /**
   * Method that it is executed when the way of sort the project change
   * @param sortSel sort selected.
   */
  procChangeSort(sortSel: SortSelectedModel) {
    this.sortSelected = sortSel;
    console.log(sortSel);
  }

  /**
   * Methos that it is executed when the way to organize the project change
   * @param showView show view selected could be folder or all files
   */
  procChangeShow(showView: string) {
    this.showBySelected = showView;
    console.log(showView);
  }

  /**
   * Method that it is executed when the view change
   * @param viewCurr View selected Grid or List
   */
  procChangeView(viewCurr: string) {
    this.viewGridSelected = viewCurr;
    console.log('view current:' + viewCurr);
  }

  /**
   * Method to process the action ovder the folder
   * @param actionFolder action over the folder
   */
  procFolderAction(actionFolder: KeyValue<string,ProjectItem>)
  {
    if(actionFolder.key == '_open')
    {
      this.currentFolders.push(actionFolder.value.nameProjectItem);
      this.appyFilter();
    }
    console.log(actionFolder);
  }
  
  /**
   * Method to process the action ovder the folder
   * @param actionItemPro Action over the itemProces
   */
  proItemProjAction(actionItemPro: KeyValue<string,ProjectItem>)
  {
    console.log(actionItemPro);
  }

  /**
   * Method to apply el filter according to de criterias selected
   */
  appyFilter()
  {
    this.dataProjectItem = this._originalDataPrItem;
    
    this.applyFilterByFolder();
    

  }

  applyFilterByFolder()
  {
    if(this.showBySelected != 'folder')
      return;
    
    let allPath = this.currentFolders.toString().replace(',','/');
    this.dataProjectItem = this.dataProjectItem.filter(el => el.path == allPath);
  }

}
