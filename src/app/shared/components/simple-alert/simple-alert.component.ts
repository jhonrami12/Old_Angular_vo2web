import { Component, Input, OnInit } from '@angular/core';
import { SimpleAlertModel } from '../../models/simple-alert-model';
import { SimpleAlertService } from '../../services/simple-alert.service';

@Component({
  selector: 'app-simple-alert',
  templateUrl: './simple-alert.component.html',
  styleUrls: ['./simple-alert.component.css']
})
export class SimpleAlertComponent implements OnInit {

  @Input() timeDisappear: number;
  openedNotif: boolean;
  message: string;
  classTypeAlert : string;

  typesAlertCollec: any = {
    'Information': 'text-blue-700 bg-blue-100 dark:text-blue-800 dark:bg-blue-200',
    'Error': 'text-red-700 bg-red-100 dark:text-red-800 dark:bg-red-200',
    'Success': 'text-green-700 bg-green-100 dark:text-green-800 dark:bg-green-200',
    'Warning': 'text-yellow-700 bg-yellow-100 dark:text-yellow-800 dark:bg-yellow-200',
    'General': 'text-gray-700 bg-gray-100 dark:text-gray-300 dark:bg-gray-700'
  }

  constructor(private simpleAlertServ: SimpleAlertService) 
  {
      this.openedNotif = false;
      this.message = 'it is not nothing to show';
      this.timeDisappear = 2500;
      this.classTypeAlert = this.typesAlertCollec['General'];
  }

  ngOnInit(): void {
      this.simpleAlertServ.onShowNofi.subscribe((notif: SimpleAlertModel) =>
      {
          this.openedNotif = true;
          this.message = notif.Message;
          this.classTypeAlert = this.typesAlertCollec[notif.typeMsg];

          setTimeout(() =>{this.openedNotif = false},this.timeDisappear);
      });
  }


}
