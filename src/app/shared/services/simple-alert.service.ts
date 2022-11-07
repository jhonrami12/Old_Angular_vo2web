import { EventEmitter, Injectable } from '@angular/core';
import { NotificationMsgModel } from '../models/notification-msg-model';

@Injectable({
  providedIn: 'root'
})
export class SimpleAlertService {

  constructor() { }

  onShowNofi = new EventEmitter<NotificationMsgModel>();  

  showNotif(notification: NotificationMsgModel)
  {
    this.onShowNofi.emit(notification); 
  }
  

}
