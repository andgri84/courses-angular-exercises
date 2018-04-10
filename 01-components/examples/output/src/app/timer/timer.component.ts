import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Output()
  tick = new EventEmitter<number>();

  count = 0;

  constructor() { }

  ngOnInit() {
    const timerObservable = timer(1000, 1000);
    timerObservable.subscribe( (t) => {
      this.count++;
      this.tick.emit(this.count);
    });

  }

}
