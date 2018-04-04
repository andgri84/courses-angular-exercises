import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  data = [
    { id: 1, title: 'Product 1'},
    { id: 2, title: 'Product 2'},
    { id: 3, title: 'Product 3'},
    { id: 4, title: 'Product 4'},
    { id: 5, title: 'Product 5'},
    { id: 6, title: 'Product 6'},
    { id: 7, title: 'Product 7'},
    { id: 8, title: 'Product 8'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  itemClick(event: any, item: any) {
    this.router.navigate(['/productdetail/' + item.id]);
  }

}
