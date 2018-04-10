import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.messageEmitter.subscribe(
      (message) => console.log('[ChildComponent] ' + message)
    );
  }

}
