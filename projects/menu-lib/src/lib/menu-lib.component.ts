import { Component, OnInit, Input } from '@angular/core';
import { MenuLibService } from './menu-lib.service';
import {MenuItem} from 'primeng/api';
import { MenuInterface } from '../menu-interface';

@Component({
  selector: 'lib-menu-lib',
  templateUrl: './menu-lib.component.html',
  styles: []
})
export class MenuLibComponent implements OnInit {

  @Input() options: MenuInterface;
  constructor(private serv : MenuLibService) { }
  
  ngOnInit() { 
    console.log(this.options)
  }

}
