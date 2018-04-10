import { Page4Guard } from './guards/page4.guard';
import { Page3Guard } from './guards/page3.guard';
import { Page2Guard } from './guards/page2.guard';
import { Page1Guard } from './guards/page1.guard';
import { Page4Component } from './components/page4/page4.component';
import { Page3Component } from './components/page3/page3.component';
import { Page2Component } from './components/page2/page2.component';
import { Page1Component } from './components/page1/page1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/page1', pathMatch: 'full' },
  { path: 'page1', component: Page1Component, canActivate: [Page1Guard] },
  { path: 'page2', component: Page2Component, canActivate: [Page2Guard] },
  { path: 'page3', component: Page3Component, canActivate: [Page3Guard] },
  { path: 'page4', component: Page4Component, canDeactivate: [Page4Guard] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {}
