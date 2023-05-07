import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V2vFolderViewProjectComponent } from './folder-view-project.component';
import { V2vPrimengModule } from '../../../shared/modules/primeng.module';
import { V2vTranslateModule } from '../../../shared/modules/translate.module';
import { V2vCardProjectModule } from '../card-project/card-project.module';

@NgModule({
  declarations: [V2vFolderViewProjectComponent],
  imports: [
    CommonModule,
    V2vPrimengModule,
    V2vTranslateModule,
    V2vCardProjectModule,
  ],
  exports: [V2vFolderViewProjectComponent],
})
export class V2vFolderViewProjectModule {}
