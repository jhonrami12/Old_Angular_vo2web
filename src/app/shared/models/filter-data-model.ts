import { KeyValue } from "@angular/common";

export class FilterDataModel {
    value: string;
    display: string;
    iconName: string;
    childs: KeyValue<string,string>[];

    constructor(){
        this.value = "";
        this.display ="";
        this.iconName = "";
        this.childs = [];
    }
}
