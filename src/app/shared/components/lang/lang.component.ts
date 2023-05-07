import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Flag } from '../../models/flag.model';

@Component({
  selector: 'v2v-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss'],
})
export class V2vLangComponent implements OnInit {
  flags: Flag[] = [
    {
      id: 1,
      title: 'Es',
      name: 'es',
      url: '../../../assets/flags/spanish.gif',
    },
    {
      id: 2,
      title: 'En',
      name: 'en',
      url: '../../../assets/flags/usa.gif',
    },
  ];

  flag: Flag;
  selectedCountry: string;

  constructor(private translate: TranslateService) {
    this.flag = this.flags[1];
    this.translate.setDefaultLang(this.flag.name);
    this.translate.use(this.flag.name);
    console.log('1');
  }

  ngOnInit(): void {}

  select(event: any): void {
    this.flag = event.value;
    this.translate.use(this.flag.name);
  }
}
