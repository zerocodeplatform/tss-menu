import { NgModule } from '@angular/core';
import { MenuLibComponent } from './menu-lib.component';
import { TieredMenuModule } from 'primeng/tieredmenu';
import {MenuItem} from 'primeng/api';

@NgModule({
  imports: [TieredMenuModule ],
  declarations: [MenuLibComponent],
  exports: [MenuLibComponent]
})
export class MenuLibModule { }
