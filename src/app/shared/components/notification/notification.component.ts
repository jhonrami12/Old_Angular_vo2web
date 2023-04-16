import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { TypeMessage } from '../../models/constants';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  providers: [MessageService],
})
export class NotificationComponent implements OnInit, OnDestroy {
  unsubscribe: Subject<any> = new Subject<any>();

  constructor(
    private notificationService: NotificationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getMessage();
  }

  getMessage(): void {
    this.notificationService
      .getMessage()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(({ typeMessage, messages }) => {
        switch (typeMessage) {
          case TypeMessage.Success:
            this.showSuccess(messages);
            break;
          case TypeMessage.Info:
            this.showInfo(messages);
            break;
          case TypeMessage.Error:
            this.showError(messages);
            break;
          default:
            this.showWarn(messages);
            break;
        }
      });
  }

  showSuccess(message: string) {
    this.messageService.add({
      key: 'single',
      severity: 'success',
      detail: message,
    });
  }

  showInfo(message: string) {
    this.messageService.add({
      key: 'single',
      severity: 'info',
      detail: message,
    });
  }

  showWarn(message: string) {
    this.messageService.add({
      key: 'single',
      severity: 'warn',
      detail: message,
    });
  }

  showError(message: string) {
    this.messageService.add({
      key: 'single',
      severity: 'error',
      detail: message,
      summary: 'Error',
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.unsubscribe();
  }
}
