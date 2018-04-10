import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class Page1Guard implements CanActivate {
  canActivate(): boolean {
    console.log('[Page1Guard]: can activate');
    return true;
  }
}
