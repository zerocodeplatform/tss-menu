import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MenuLibModule } from 'projects/menu-lib/src/public_api';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,MenuLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }