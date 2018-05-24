import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginModule } from 'tssLogin';
import { AppComponent } from './app.component';
import { MenuLibModule } from 'projects/menu-lib/src/public_api';
import { ModOneModule } from 'projects/menu-lib/src/lib/mod-one/mod-one.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, LoginModule, MenuLibModule, ModOneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
