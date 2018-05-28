import { Injectable } from "@angular/core";

export interface MenuInterface {
    items? : any;
    styling? : string
}

export  class menuPropertiesService implements MenuInterface{
    constructor(items:any, styling:string){ }
}