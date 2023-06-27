import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AntelopeModule } from 'antelope';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AntelopeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
