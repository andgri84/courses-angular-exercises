import { ApiService } from './services/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _emitter;

  constructor(private api: ApiService) {
     this._emitter = this.api.messageEmitter.subscribe((message) => {
      console.log('[AppComponent] ' + message);
      if (message === 'ko') {
        console.log('[AppComponent] unsubscribe');
        this._emitter.unsubscribe();
      }
    });

  }

  onClick() {
    this.api.emitMessage('Message from App Component');
  }

  onUnsubscribeClick() {
    this.api.emitMessage('ko');
  }
}
