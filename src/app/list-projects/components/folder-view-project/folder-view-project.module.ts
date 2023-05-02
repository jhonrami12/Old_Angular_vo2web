import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderViewProjectComponent } from './folder-view-project.component';
import { PrimengModule } from '../../../shared/modules/primeng.module';
import { CustomTranslateModule } from '../../../shared/modules/translate.module';
import { CardProjectModule } from '../card-project/card-project.module';

@NgModule({
  declarations: [FolderViewProjectComponent],
  imports: [
    CommonModule,
    PrimengModule,
    CustomTranslateModule,
    CardProjectModule,
  ],
  exports: [FolderViewProjectComponent],
})
export class FolderViewProjectModule {}
