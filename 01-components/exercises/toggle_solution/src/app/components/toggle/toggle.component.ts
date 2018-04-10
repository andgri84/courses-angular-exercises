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

  @Input() isToggled = false;

  constructor() { }

  ngOnInit() {
    this.updateMessage();
  }

  onClick() {
    this.isToggled = !this.isToggled;
    this.updateMessage();
  }

  updateMessage() {
    this.message = this.isToggled ? this.messageOn : this.messageOff;
  }

}
