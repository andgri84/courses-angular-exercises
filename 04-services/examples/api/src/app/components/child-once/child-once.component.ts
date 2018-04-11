import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-once',
  templateUrl: './child-once.component.html',
  styleUrls: ['./child-once.component.css']
})
export class ChildOnceComponent implements OnInit {

  private _emitter;

  constructor( private api: ApiService ) { }

  ngOnInit() {
    this._emitter = this.api.messageEmitter.subscribe((message) => {
      console.log('[ChildOnceComponent]' + message);
      console.log('[ChildOnceComponent] unregistering');
      this._emitter.unsubscribe();
    });
  }

}
