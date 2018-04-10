import { Page3Guard } from './guards/page3.guard';
import { Page2Guard } from './guards/page2.guard';
import { Page1Guard } from './guards/page1.guard';
import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';
import { Page4Component } from './components/page4/page4.component';
import { Page4Guard } from './guards/page4.guard';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Page1Guard,
    Page2Guard,
    Page3Guard,
    Page4Guard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
