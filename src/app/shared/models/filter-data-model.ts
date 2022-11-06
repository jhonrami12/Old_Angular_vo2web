import { KeyValue } from "@angular/common";

export class FilterDataModel {
    key: string;
    value: string;
    iconName: string;
    childs: KeyValue<string,string>[];

    constructor(){
        this.key = "";
        this.value ="";
        this.iconName = "";
        this.childs = [];
    }
}
