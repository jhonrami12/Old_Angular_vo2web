import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-rounting.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { V2vLoader } from './shared/models/custom-loader';
import { V2vLoadingModule } from './shared/components/loading/loading.module';
import { V2vHttpResponseInterceptor } from './core/interceptors/http-response.interceptor';
import { LoadingService } from './shared/services/loading.service';
import { NotificationModule } from './shared/modules/notification.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NotificationModule,
    V2vLoadingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useClass: V2vLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: V2vHttpResponseInterceptor,
      multi: true,
      deps: [LoadingService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
