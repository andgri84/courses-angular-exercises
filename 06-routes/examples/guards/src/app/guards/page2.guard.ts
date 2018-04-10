import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class Page2Guard implements CanActivate {
  canActivate(): boolean {
    console.log('[Page3Guard]: cannot activate');
    return false;
  }
}
