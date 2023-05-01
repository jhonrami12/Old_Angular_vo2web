import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  async getAsPromise<T>(url: string) {
    const request$ = this.httpClient.get<T>(url);
    return await lastValueFrom(request$);
  }
}
