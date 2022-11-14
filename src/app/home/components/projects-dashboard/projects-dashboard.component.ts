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
        key: '_languages',
        value: 'languages',
        iconName: 'translate',
        childs: [
          { key: '_english', value: 'English' },
          { key: '_spanish', value: 'Spanish' },
          { key: '_italian', value: 'Italian' },
          { key: '_french', value: 'French' },
        ],
      },
      {
        key: '_media',
        value: 'Media',
        iconName: 'video_library',
        childs: [
          { key: '_audio', value: 'Audio' },
          { key: '_video', value: 'Video' },
        ],
      },
      {
        key: '_features',
        value: 'Features',
        iconName: 'extension',
        childs: [
          { key: '_transcribe', value: 'Transcribe' },
          { key: '_translate', value: 'Translate' },
          { key: '_dubbling', value: 'Dubbling' },
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
      {
        id: 10,
        typeItem: 'folder',
        imgCover: '',
        nameProjectItem: 'Folder more deep',
        path: 'Predicas/Apologia',
        originalLanguaje: '',
        targetLanguaje: '',
        media: '',
        features: []
      },
      {
        id: 11,
        typeItem: 'folder',
        imgCover: '',
        nameProjectItem: 'Folder New',
        path: '',
        originalLanguaje: '',
        targetLanguaje: '',
        media: '',
        features: []
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
    console.log("~ file: projects-dashboard.component.ts ~ line 224 ~ ProjectsDashboardComponent ~ procChangFilter ~ filSelected", filSelected);
    this.filterSelected = filSelected;
    this.appyFilter();
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
    
    if(this.showBySelected == 'files')
        this.currentFolders = [];

    this.appyFilter();
    // console.log(showView);
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
   * Method to process the event when back to the folder to some position
   * @param positionBack Position in the bread scrumb to back
   */
  procBreadCrumbBack(positionBack: number)
  {
    console.log('positionBack:'+positionBack);
    if (positionBack == -1)
      this.currentFolders = [];

    this.currentFolders = this.currentFolders.slice(0,positionBack+1);

    this.appyFilter();
  }

  /**
   * Method to apply el filter according to de criterias selected
   */
  appyFilter()
  {
    this.dataProjectItem = this._originalDataPrItem;
    
    //Filters
    this.applyFilterByFolder();
    this.applyFilterByFilComp();

    //Order by
    this.sortByFolderFirst();

  }

  /**
   * Method to apply the filter base on what was selected in the filter-by-field component
   */
  applyFilterByFilComp()
  {
    // this.filterSelected
    this.dataProjectItem = this.dataProjectItem.filter(el =>  
      el.typeItem == 'folder' ||  
      this.filterSelected.every((currV) => {
          if (currV.parentKey == '_languages' )
            return currV.childKey == el.originalLanguaje || currV.childKey == el.targetLanguaje
          else if (currV.parentKey == '_media' )
            return currV.childKey == el.media
          else if(currV.parentKey == '_features')
            return el.features.findIndex(feat => feat == currV.childKey) >= 0
          else
            return false
        })
      );
  }
  

  /**
   * Method to apply the filter base on the current folder selected.
   * 
   */
  applyFilterByFolder(): void
  {
    if(this.showBySelected != 'folder')
    {
      this.dataProjectItem = this.dataProjectItem.filter(el => el.typeItem != 'folder' );  
      return;
    }
      
    let allPath = this.currentFolders.toString().replace(',','/');
    this.dataProjectItem = this.dataProjectItem.filter(el => el.path == allPath);
  }

  /**
   * Sort the items by firts the folder and after the item-project
   */
  sortByFolderFirst()
  {
    this.dataProjectItem = this.dataProjectItem.sort((a,b) => {
        return a.typeItem == b.typeItem ? 0 : a.typeItem == 'folder' ? -1 : 1;
      }
    );
  }

}
