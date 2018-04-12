import { Page4Component } from './../components/page4/page4.component';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Page4Guard implements CanDeactivate<Page4Component>, CanActivate {
  canDeactivate(component: Page4Component): boolean {
    console.log('[Page4Guard]: cannot deactivate');
    return false;
  }

  canActivate(): boolean {
    return true;
  }
}
