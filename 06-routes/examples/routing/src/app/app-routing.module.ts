import { Page3bComponent } from './components/page3b/page3b.component';
import { Page3Component } from './components/page3/page3.component';
import { Page2Component } from './components/page2/page2.component';
import { Page1Component } from './components/page1/page1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Page4Component } from './components/page4/page4.component';
import { Page3aComponent } from './components/page3a/page3a.component';

const routes: Routes = [
  { path: '', redirectTo: '/page1', pathMatch: 'full' },
  { path: 'page1', component: Page1Component },
  { path: 'page2/:id', component: Page2Component },
  { path: 'page3', component: Page3Component,
    children: [
      { path: '', redirectTo: 'page3a', pathMatch: 'full' },
      { path: 'page3a', component: Page3aComponent },
      { path: 'page3b', component: Page3bComponent }
    ] },
  { path: 'page4', component: Page4Component }
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
