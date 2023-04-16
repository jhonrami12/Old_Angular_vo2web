import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from '../../shared/services/loading.service';

@Injectable({
  providedIn: 'root',
})
export class HttpResponseInterceptor implements HttpInterceptor {
  private requestNumber: number = 0;

  constructor(private loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.requestNumber++;
    this.loadingService.start();
    return next.handle(request).pipe(
      finalize(() => {
        this.requestNumber--;
        if (this.requestNumber === 0) {
          this.loadingService.end();
        }
      })
    );
  }
}
