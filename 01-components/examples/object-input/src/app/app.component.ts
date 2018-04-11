import { Employee } from './vo/';
import { ApiService } from './services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data1ToBePassed: any;

  data2ToBePassed: Array<Employee>;

  constructor(private api: ApiService) {}
  ngOnInit() {
    this.data1ToBePassed = {
      attr: undefined
    };

    this.data2ToBePassed = this.api.getEmplyeeList();
  }
}
