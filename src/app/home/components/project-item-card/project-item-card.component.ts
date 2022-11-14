import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectItem } from '../../models/project-item';

@Component({
  selector: 'app-project-item-card',
  templateUrl: './project-item-card.component.html',
  styleUrls: ['./project-item-card.component.css']
})
export class ProjectItemCardComponent implements OnInit {
  @Input() projectItem: ProjectItem = new ProjectItem();
  @Output() onFolderAction = new EventEmitter<KeyValue<string,ProjectItem>>();
  @Output() onItemProjAction = new EventEmitter<KeyValue<string,ProjectItem>>();

  dataOptionFolder: string[];
  dataOptionItemPr: string[];

  constructor() { 
    this.dataOptionFolder = [];
    this.dataOptionItemPr = [];
  }

  ngOnInit(): void {
    this.dataOptionFolder = ['_open','_rename','_delete','_move'];
    this.dataOptionItemPr = ['_open_edit','_rename','_delete','_move','_preview','_download'];
  }

  /**
   * Method to process the action over the folder
   * @param optKey Key or action
   * @param itemPro Item over the action was clicked
   */
  procClickFolder(optKey: string, itemPro: ProjectItem)
  {
    this.onFolderAction.emit({key:optKey, value: itemPro});
  }

  /**
   *  Method to process the action over the Item Project
   * @param optKey Key or action
   * @param itemPro Item over the action was clicked
   */
  procClickItemProj(optKey: string, itemPro: ProjectItem)
  {
    this.onItemProjAction.emit({key:optKey, value: itemPro});
  }

}
