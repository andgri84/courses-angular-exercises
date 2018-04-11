import { Component, OnInit, Input } from '@angular/core';
import { Job, Employee } from '../../vo/';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  data1: any;

  @Input()
  data2: Array<Employee>;

  constructor() { }

  ngOnInit() {
  }

}
