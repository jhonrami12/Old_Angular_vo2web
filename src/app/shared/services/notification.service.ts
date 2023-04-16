import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TypeMessage } from '../models/constants';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private message = new Subject();
  private message$ = this.message.asObservable();

  constructor() {}

  createMessage(typeMessage: TypeMessage, messages: string) {
    this.message.next({ typeMessage, messages });
  }

  getMessage(): Observable<any> {
    return this.message$;
  }
}
