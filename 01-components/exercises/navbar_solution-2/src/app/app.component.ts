import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedItem: any;

  navbarData: Array<any> = [
    { title: 'Button 1', value: 'value 1' },
    { title: 'Button 2', value: 'value 2' },
    { title: 'Button 3', value: 'value 3' },
    { title: 'Button 4', value: 'value 4' }
  ];

  onSelect(event) {
    console.log('Navbar select');
    console.log(event);
    this.selectedItem = event;
  }
}
