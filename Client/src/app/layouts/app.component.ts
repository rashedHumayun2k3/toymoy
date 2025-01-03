import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from '../core/components/header/header.component';
import { AppFooterComponent } from '../core/components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,  // This marks the component as standalone
  imports: [RouterOutlet, AppHeaderComponent, AppFooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Corrected from styleUrl to styleUrls
})

export class AppComponent {
  title = 'toy-moy-client';
}