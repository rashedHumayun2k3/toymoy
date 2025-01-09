import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductItem } from '../../../../../models/product.model';

@Component({
  selector: 'app-product-details',
  standalone: true,               
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: ProductItem | null = null;
  productId: string = '';

  constructor(
    private route: ActivatedRoute,
  //  private productService: ProductsService
  ) {}

  ngOnInit(): void {
    // Get the productId from the route params
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.loadProductDetails();
  }

  loadProductDetails(): void {
    // Fetch the product details using the ProductService
    // this.productService.getProductById(this.productId).subscribe((productData) => {
    //   this.product = productData;
    // });
  }
}
