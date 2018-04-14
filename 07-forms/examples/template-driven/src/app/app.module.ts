import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { FormDataBoundComponent } from './components/form-data-bound/form-data-bound.component';
import { FormStatesComponent } from './components/form-states/form-states.component';
import { FormMessagesComponent } from './components/form-messages/form-messages.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormDataBoundComponent,
    FormStatesComponent,
    FormMessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
