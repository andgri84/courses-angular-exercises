import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ApiService {

  private _messageEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  debugLog(message: string) {
    console.log(message);
  }

  emitMessage(message: string) {
    console.log('Emitting message');
    this._messageEmitter.emit(message);
  }

  get messageEmitter(): EventEmitter<string> {
    return this._messageEmitter;
  }

}
