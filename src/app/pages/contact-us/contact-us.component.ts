import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TeaserComponent } from '../../modules/teaser/teaser.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [NavbarComponent, TeaserComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactUsComponent {

}
