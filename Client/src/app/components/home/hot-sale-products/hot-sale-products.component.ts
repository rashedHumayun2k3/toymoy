import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hot-sale-products',
  templateUrl: './hot-sale-products.component.html',
  styleUrl: './hot-sale-products.component.scss',
  standalone: true,
  imports: [
    CommonModule
  ],
})

export class HotSaleProductsComponent implements OnInit{
  products = [
    {
      image: 'assets/images/product/large-size/2.jpg',
      sticker: 'New',
      manufacturer: 'Graphic Corner',
      rating: [1, 2, 3], // Adjust number of stars
      name: 'Accusantium dolorem1',
      newPrice: 46.80,
      oldPrice: null,
      discount: null
    },
    {
      image: 'assets/images/product/large-size/1.jpg',
      sticker: 'New',
      manufacturer: 'Studio Design',
      rating: [1, 2, 3], // Adjust number of stars
      name: 'Mug Today is a good day',
      newPrice: 71.80,
      oldPrice: 77.22,
      discount: '-7%'
    },
    {
      image: 'assets/images/product/large-size/3.jpg',
      sticker: 'New',
      manufacturer: 'Studio Design',
      rating: [1, 2, 3], // Adjust number of stars
      name: 'Mug Today is a good day',
      newPrice: 71.80,
      oldPrice: 77.22,
      discount: '-7%'
    },
    {
      image: 'assets/images/product/large-size/3.jpg',
      sticker: 'New',
      manufacturer: 'Studio Design',
      rating: [1, 2, 3], // Adjust number of stars
      name: 'Mug Today is a good day',
      newPrice: 58.80,
      oldPrice: 67.22,
      discount: '-7%'
    },  
    {
      image: 'assets/images/product/large-size/1.jpg',
      sticker: 'New',
      manufacturer: 'Studio Design',
      rating: [1, 2, 3], // Adjust number of stars
      name: 'Mug Today is a good day',
      newPrice: 71.80,
      oldPrice: 77.22,
      discount: '-7%'
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // Any additional logic can be added here if needed
  }
}
