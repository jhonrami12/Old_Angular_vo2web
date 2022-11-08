import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Angular Component Material
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatRippleModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';

//Own Components to export
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { SortByFieldComponent } from './components/sort-by-field/sort-by-field.component';
import { FilterByFieldComponent } from './components/filter-by-field/filter-by-field.component';
import { SimpleAlertComponent } from './components/simple-alert/simple-alert.component';
import { KeysPipe } from './pipes/keys.pipe';


@NgModule({
  declarations: [
    SearchFieldComponent,
    SortByFieldComponent,
    FilterByFieldComponent,
    SimpleAlertComponent,
    KeysPipe
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatRippleModule,
    MatTooltipModule
  ],
  exports:[
    SearchFieldComponent,
    SortByFieldComponent,
    FilterByFieldComponent,
    SimpleAlertComponent
  ]
})
export class SharedModule { }
