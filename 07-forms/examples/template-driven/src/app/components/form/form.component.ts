import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  model: User = new User();

  roles = [
    'Admin',
    'Editor',
    'Reader'
  ];

  constructor() { }

  ngOnInit() {
  }

}
