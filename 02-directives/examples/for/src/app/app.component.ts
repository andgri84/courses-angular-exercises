import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list = [
    {name: 'Pippo', id: 1},
    {name: 'Pluto', id: 2},
    {name: 'Paperino', id: 3},
    {name: 'Paperoga', id: 4},
    {name: 'Paperina', id: 5},
    {name: 'Topolino', id: 6}
  ];
}
