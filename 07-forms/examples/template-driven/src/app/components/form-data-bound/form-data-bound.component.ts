import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-data-bound',
  templateUrl: './form-data-bound.component.html',
  styleUrls: ['./form-data-bound.component.css']
})
export class FormDataBoundComponent implements OnInit {

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
