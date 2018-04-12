import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class Page2Guard implements CanActivate {

  canActivate(): Observable<boolean> {
    console.log('[Page2Guard]: will activate in 1000ms');

    return Observable.of(true).delay(1000).do(val => false);
  }
}
