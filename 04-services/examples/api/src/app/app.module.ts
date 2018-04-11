import { ApiService } from './services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { ChildOnceComponent } from './components/child-once/child-once.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildOnceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
