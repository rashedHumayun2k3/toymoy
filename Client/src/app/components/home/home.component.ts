// src/app/features/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { ProductListComponent } from '../products/product-list/product-list.component';
import { HotSaleProductsComponent } from './hot-sale-products/hot-sale-products.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';


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
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [SliderComponent, ProductListComponent, HotSaleProductsComponent, ShoppingCartComponent]
})
export class HomeComponent implements OnInit {
  productSections: ProductSection[] = [];

  constructor() { }

  ngOnInit(): void {
    this.productSections = [
      {
        title: 'Best Sellers',
        products: [
          { name: 'Toy Car', price: 19.99, image: 'assets/images/toy-car.jpg' },
          { name: 'Building Blocks', price: 29.99, image: 'assets/images/building-blocks.jpg' },
          { name: 'Doll House', price: 49.99, image: 'assets/images/doll-house.jpg' },
          // Add more products as needed
        ]
      },
      {
        title: 'New Arrivals',
        products: [
          { name: 'Remote Control Airplane', price: 39.99, image: 'assets/images/rc-airplane.jpg' },
          { name: 'Puzzle Set', price: 14.99, image: 'assets/images/puzzle-set.jpg' },
          { name: 'Action Figures', price: 24.99, image: 'assets/images/action-figures.jpg' },
          // Add more products as needed
        ]
      },
      // Add more sections as needed
    ];
  }
}
