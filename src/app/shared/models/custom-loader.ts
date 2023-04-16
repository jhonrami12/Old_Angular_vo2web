import { TranslateLoader } from '@ngx-translate/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class CustomLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}

  getTranslation(langCountry: string): Observable<any> {
    const url = `/assets/i18n/${langCountry}.json`;
    return this.http.get(url);
  }
}
