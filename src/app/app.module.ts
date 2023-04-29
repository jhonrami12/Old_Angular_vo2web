import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-rounting.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CustomLoader } from './shared/models/custom-loader';
import { LoadingModule } from './shared/components/loading/loading.module';
import { HttpResponseInterceptor } from './core/interceptors/http-response.interceptor';
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
    LoadingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useClass: CustomLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpResponseInterceptor,
      multi: true,
      deps: [LoadingService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
