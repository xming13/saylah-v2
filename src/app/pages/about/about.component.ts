import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TeaserComponent } from '../../components/teaser/teaser.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent,
    TeaserComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutComponent {

}
