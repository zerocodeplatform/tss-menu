import { NgModule } from '@angular/core';
import { MenuLibComponent } from './menu-lib.component';
import { TieredMenuModule } from 'primeng/tieredmenu';
import {MenuItem} from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule,
    TieredMenuModule,
    MenubarModule ],
  declarations: [MenuLibComponent],
  exports: [MenuLibComponent]
})
export class MenuLibModule { }
