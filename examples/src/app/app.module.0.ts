import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component.0';
import { ArkeraComponentsModule } from 'angular-arkera-components';



@NgModule({
  imports:      [ BrowserModule, HttpModule, ArkeraComponentsModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
