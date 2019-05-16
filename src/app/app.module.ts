import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NeatScrollspyModule } from 'ngx-neatscrollspy';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicthemeComponent } from './layout/basictheme/basictheme.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicthemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NeatScrollspyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
