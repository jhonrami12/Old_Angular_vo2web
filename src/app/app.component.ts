import { Component } from '@angular/core';
import { SimpleAlertService } from './shared/services/simple-alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'vo2vo.web';

  openedNotif: boolean;
  constructor(private simpleAlertServ: SimpleAlertService) {
    this.openedNotif = false;
  }

  ngOnInit(): void {
    this.simpleAlertServ.onShowNofi.subscribe((notif: any) => {
      this.openedNotif = true;
      setTimeout(() => {  this.openedNotif = false; }, 3000);
    });
  }
}
