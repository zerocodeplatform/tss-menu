import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McompComponent } from './mcomp/mcomp.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [McompComponent],
  exports:[McompComponent]
})
export class ModOneModule { }
