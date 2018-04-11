import { Component, OnInit } from '@angular/core';

import { fromEvent } from 'rxjs/observable/fromEvent';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  constructor() { }

  ngOnInit() {

    // Example 1
    const usernameInput = document.getElementById('username');
    const inputObservable = fromEvent(usernameInput, 'input');
    inputObservable.subscribe( evt => console.log(evt) );

    // Example 2
    const timeoutObservable = new Observable(observer => {
      setTimeout(() => {
          observer.next(42);
      }, 1000);

      setTimeout(() => {
          observer.next(43);
      }, 2000);

      setTimeout(() => {
          observer.complete();
      }, 3000);
    });
    timeoutObservable.subscribe( evt => console.log(evt) );
  }

}
