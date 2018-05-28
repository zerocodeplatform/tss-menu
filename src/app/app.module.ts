import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MenuLibModule } from 'projects/menu-lib/src/public_api';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenubarModule } from 'primeng/menubar';
import { ImgLibModule } from 'tss-img-lib';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,MenuLibModule, TieredMenuModule, MenubarModule, ImgLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }