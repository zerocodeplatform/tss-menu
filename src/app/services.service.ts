import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  obj={
    "name":"Mahesh"
  }
  test(){
    return true;
  }
}
