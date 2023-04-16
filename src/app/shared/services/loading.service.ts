import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loading = new BehaviorSubject(false);

  loading$ = this.loading.asObservable();

  constructor() {}

  start() {
    this.loading.next(true);
  }

  end() {
    this.loading.next(false);
  }
}
