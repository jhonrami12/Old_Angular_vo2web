import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  overlayVisible: boolean = false;

  constructor(private router: Router) {}

  logOut() {
    this.router.navigate(['/login']);
  }
}
