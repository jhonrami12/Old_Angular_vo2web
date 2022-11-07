import { EventEmitter, Injectable } from '@angular/core';
import { SimpleAlertModel } from '../models/simple-alert-model';

@Injectable({
  providedIn: 'root'
})
export class SimpleAlertService {

  constructor() { }

  onShowNofi = new EventEmitter<SimpleAlertModel>();  

  showNotif(notification: SimpleAlertModel)
  {
    this.onShowNofi.emit(notification); 
  }
  

}
