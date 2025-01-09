// src/app/features/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../products/product-list/product-list.component';

interface Product {
  name: string;
  price: number;
  image: string;
}

interface ProductSection {
  title: string;
  products: Product[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ProductListComponent]
})
export class HomeComponent implements OnInit {
  productSections: ProductSection[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log('home component ngOnInit...');
  }

  content: string = "";
  setMessage1 () {
    debugger;
    this.content = 'This is message # 1';
  }
}
