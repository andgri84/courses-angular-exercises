import { EmployeeService } from './services/employee.service';
import { ApiService } from './services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ApiService,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
