import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  param: any;

  private subscription: any;

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe( params => this.param = params['id']);
  }

}
