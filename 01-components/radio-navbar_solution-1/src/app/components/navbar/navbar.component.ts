import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  data: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  onClick(event: any, btnData: any) {
    console.log('Button clicked');
    console.log(btnData);
  }
}
