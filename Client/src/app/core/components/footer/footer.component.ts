import { Component } from '@angular/core';
import { StaticTopComponent } from './static-top/static-top.component';
import { StaticMiddleComponent } from './static-middle/static-middle.component';
import { StaticBottomComponent } from './static-bottom/static-bottom.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [StaticTopComponent, StaticMiddleComponent, StaticBottomComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class AppFooterComponent {

}
