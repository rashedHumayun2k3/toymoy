import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-static-top',
  templateUrl: './static-top.component.html',
  styleUrls: ['./static-top.component.scss'],
  standalone: true,
  imports:[CommonModule]
})
export class StaticTopComponent {
  shippingDetails = [
    { icon: '../../../../../assets/images/shipping-icon/1.png', title: 'Free Delivery', description: 'And free returns. See checkout for delivery dates.' },
    { icon: '../../../../../assets/images/shipping-icon/2.png', title: 'Safe Payment', description: 'Pay with the world\'s most popular and secure payment methods.' },
    { icon: '../../../../../assets/images/shipping-icon/3.png', title: 'Shop with Confidence', description: 'Our Buyer Protection covers your purchase from click to delivery.' },
    { icon: '../../../../../assets/images/shipping-icon/4.png', title: '24/7 Help Center', description: 'Have a question? Call a Specialist or chat online.' }
  ];
}
