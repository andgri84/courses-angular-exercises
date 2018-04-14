import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-states',
  templateUrl: './form-states.component.html',
  styleUrls: ['./form-states.component.css']
})
export class FormStatesComponent implements OnInit {

  model: User = new User();

  roles = [
    'Admin',
    'Editor',
    'Reader'
  ];

  submitForm(event, userForm) {
    console.log(event);
    console.log(userForm);
  }

  constructor() { }

  ngOnInit() {
  }

}
