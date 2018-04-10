import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class Page3Guard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    console.log('[Page3Guard]: redirect');
    this.router.navigate(['/page1']);
    return null;
  }
}
