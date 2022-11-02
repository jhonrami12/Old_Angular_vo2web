import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFieldComponent } from './components/search-field/search-field.component';



@NgModule({
  declarations: [
    SearchFieldComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SearchFieldComponent
  ]
})
export class SharedModule { }
