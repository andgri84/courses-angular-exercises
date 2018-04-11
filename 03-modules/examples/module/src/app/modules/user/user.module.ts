import { HiddenService } from './services/hidden.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { UserApiService } from './services/user-api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    UserComponent
  ],
  declarations: [
    UserComponent
  ],
  providers: [
    UserApiService,
    HiddenService
  ]
})
export class UserModule {
}
