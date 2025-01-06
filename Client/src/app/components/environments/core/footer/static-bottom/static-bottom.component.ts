import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-static-bottom',
  standalone: true,
  templateUrl: './static-bottom.component.html',
  styleUrls: ['./static-bottom.component.scss'],
  imports: [CommonModule]
})
export class StaticBottomComponent {
  footerLinks = [
    { text: 'Online Shopping', url: '#' },
    { text: 'Promotions', url: '#' },
    { text: 'Help', url: '#' },
    { text: 'Customer Service', url: '#' }
  ];
}
