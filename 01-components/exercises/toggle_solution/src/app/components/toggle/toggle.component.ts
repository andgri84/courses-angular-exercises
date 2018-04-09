import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  @Input()
  messageOn: string;

  @Input()
  messageOff: string;

  message: string;

  public isToggled = false;

  constructor() { }

  ngOnInit() {
    this.isToggled = false;
    this.message = this.messageOff;
  }

  onClick() {
    this.isToggled = !this.isToggled;
    this.message = this.isToggled ? this.messageOn : this.messageOff;
  }

}
