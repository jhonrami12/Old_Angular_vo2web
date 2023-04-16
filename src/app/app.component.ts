import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    const language = navigator.language.split('-');
    this.translate.setDefaultLang(language[0]);
    this.translate.use(language[0]);
  }
}
