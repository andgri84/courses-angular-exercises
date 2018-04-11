import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/do';
import { concat } from 'rxjs/operator/concat';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  private _dataObservable: Observable<any>;

  getPostsObservable(): Observable<any> {
    if (!this._dataObservable) {
      this._dataObservable = this.http
        .get('https://jsonplaceholder.typicode.com/posts')
        .map(response => response.json());
    }
    return this._dataObservable;
  }

  getConcatObservable(): Observable<any> {
    const obs1 = this.http.get('https://jsonplaceholder.typicode.com/posts/1')
      .map(response => response.json());
    const obs2 = this.http.get('https://jsonplaceholder.typicode.com/posts/2')
      .map(response => response.json())
      .do(() => console.log('Loaded 2'))
      .concat(obs1);
    return obs2;
  }

}


