import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-messages',
  templateUrl: './form-messages.component.html',
  styleUrls: ['./form-messages.component.css']
})
export class FormMessagesComponent implements OnInit {

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
