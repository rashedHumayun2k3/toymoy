import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [
    CommonModule
  ],
})

export class ProductListComponent {
  products = [
    {
      image: 'assets/images/product/large-size/1.jpg',
      name: 'Accusantium dolorem1',
      manufacturer: 'Graphic Corner',
      manufacturerLink: 'product-details.html',
      link: 'products/1',
      newPrice: 46.8,
      oldPrice: null,
      discount: null,
      sticker: 'New',
      stars: ['fa fa-star-o', 'fa fa-star-o', 'fa fa-star-o', 'fa fa-star-o', 'fa fa-star-o'],
    },
    {
      image: 'assets/images/product/large-size/2.jpg',
      name: 'Mug Today is a good day',
      manufacturer: 'Studio Design',
      manufacturerLink: 'product-details.html',
      link: 'products/2',
      newPrice: 71.8,
      oldPrice: 77.22,
      discount: '-7%',
      sticker: 'New',
      stars: ['fa fa-star-o', 'fa fa-star-o', 'fa fa-star-o', 'fa fa-star-o', 'fa fa-star-o'],
    },
    {
      image: 'assets/images/product/large-size/1.jpg',
      name: 'Accusantium dolorem1',
      manufacturer: 'Graphic Corner',
      manufacturerLink: 'product-details.html',
      link: 'products/3',
      newPrice: 46.8,
      oldPrice: null,
      discount: null,
      sticker: 'New',
      stars: ['fa fa-star-o', 'fa fa-star-o', 'fa fa-star-o', 'fa fa-star-o', 'fa fa-star-o'],
    },
    {
      image: 'assets/images/product/large-size/2.jpg',
      name: 'Mug Today is a good day',
      manufacturer: 'Studio Design',
      manufacturerLink: 'product-details.html',
      link: 'products/4',
      newPrice: 71.8,
      oldPrice: 77.22,
      discount: '-7%',
      sticker: 'New',
      stars: ['fa fa-star-o', 'fa fa-star-o', 'fa fa-star-o', 'fa fa-star-o', 'fa fa-star-o'],
    },
    {
      image: 'assets/images/product/large-size/1.jpg',
      name: 'Accusantium dolorem1',
      manufacturer: 'Graphic Corner',
      manufacturerLink: 'product-details.html',
      link: 'products/5',
      newPrice: 46.8,
      oldPrice: null,
      discount: null,
      sticker: 'New',
      stars: ['fa fa-star-o', 'fa fa-star-o', 'fa fa-star-o', 'fa fa-star-o', 'fa fa-star-o'],
    },
    {
      image: 'assets/images/product/large-size/2.jpg',
      name: 'Mug Today is a good day',
      manufacturer: 'Studio Design',
      manufacturerLink: 'product-details.html',
      link: 'products/6',
      newPrice: 71.8,
      oldPrice: 77.22,
      discount: '-7%',
      sticker: 'New',
      stars: ['fa fa-star-o', 'fa fa-star-o', 'fa fa-star-o', 'fa fa-star-o', 'fa fa-star-o'],
    },
    // Add more products here
  ];
}