import { Component, OnInit } from '@angular/core';
import { NotificationMsgModel } from '../../models/notification-msg-model';
import { SimpleAlertService } from '../../services/simple-alert.service';

@Component({
  selector: 'app-simple-alert',
  templateUrl: './simple-alert.component.html',
  styleUrls: ['./simple-alert.component.css']
})
export class SimpleAlertComponent implements OnInit {

  openedNotif: boolean;
  message: string;
  constructor(private simpleAlertServ: SimpleAlertService) 
  {
      this.openedNotif = false;
      this.message = 'este es un mensaje de prueba';
  }

  ngOnInit(): void {
      this.simpleAlertServ.onShowNofi.subscribe((notif: NotificationMsgModel) =>
      {
          this.openedNotif = true;
          this.message = notif.Message;
          setTimeout(() =>{this.openedNotif = false},8000);
      });
  }


}
