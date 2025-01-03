import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-static-middle',
  standalone: true,
  templateUrl: './static-middle.component.html',
  styleUrls: ['./static-middle.component.scss'],
  imports: [CommonModule]

})
export class StaticMiddleComponent {
  footerBlocks = [
    {
      title: 'Product',
      links: [
        { text: 'Prices drop', url: '#' },
        { text: 'New products', url: '#' },
        { text: 'Best sales', url: '#' },
        { text: 'Contact us', url: '#' }
      ]
    },
    {
      title: 'Our company',
      links: [
        { text: 'Delivery', url: '#' },
        { text: 'Legal Notice', url: '#' },
        { text: 'About us', url: '#' },
        { text: 'Contact us', url: '#' }
      ]
    }
  ];
}
