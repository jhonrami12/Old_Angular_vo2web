import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'v2v-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class V2vUserComponent {
  @Output()
  onSelected: EventEmitter<string> = new EventEmitter<string>();
  overlayVisible: boolean = false;
  constructor(private router: Router) {}

  logOut() {
    this.router.navigate(['/login']);
  }

  account() {
    this.onSelected.emit('/dashboard/account');
    this.router.navigate(['/dashboard/account']);
  }
}
