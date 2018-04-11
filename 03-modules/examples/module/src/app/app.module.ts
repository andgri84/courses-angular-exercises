import { HiddenService } from './modules/user/services/hidden.service';
import { UserApiService } from './modules/user/services/user-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule
  ],
  providers: [
    HiddenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private userApi: UserApiService, private hidden: HiddenService) {

  }
}
