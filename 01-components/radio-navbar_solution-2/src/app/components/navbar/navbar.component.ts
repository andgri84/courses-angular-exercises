import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  data: Array<any>;

  @Output() select: EventEmitter<any> = new EventEmitter();

  selectedItem: any;

  constructor() { }

  ngOnInit() {
  }

  onClick(event: any, btnData: any) {
    this.selectedItem = btnData;
    this.select.emit(btnData);
  }
}
