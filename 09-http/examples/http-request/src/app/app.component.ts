import { ApiService } from './services/api.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dataResult: any;

  constructor(private api: ApiService) {
  }

  getPosts() {
    this.api.getPostsObservable()
      .subscribe(( result ) => {
        console.log(result);
        this.dataResult = result;
     });

  }

  getPostsConcat() {
    this.api.getConcatObservable()
      .subscribe(( result ) => {
        console.log(result);
        this.dataResult = result;
      });
  }


}
