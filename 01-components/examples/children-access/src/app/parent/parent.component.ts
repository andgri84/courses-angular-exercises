import { ChildComponent } from './../child/child.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild(ChildComponent)
  child: ChildComponent;

  constructor() { }

  ngOnInit() {
    console.log(this.child.childValue);
  }

}
