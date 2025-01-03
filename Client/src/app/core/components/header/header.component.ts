import { Component } from '@angular/core';
import { HeaderTopComponent } from './header-top/header-top.component';
import { HeaderMiddleComponent } from './header-middle/header-middle.component';
import { HeaderBottomComponent } from './header-bottom/header-bottom.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderTopComponent,HeaderMiddleComponent,HeaderBottomComponent,MobileMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class AppHeaderComponent {

}
