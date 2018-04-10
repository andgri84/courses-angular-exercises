import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myColor = 'red';

  myStyle = {
    'color': 'blue',
    'fontSize': '20px'
  };
}
