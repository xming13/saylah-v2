import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TeaserComponent } from '../../components/teaser/teaser.component';
import { EditCardsComponent } from '../../modules/edit-cards/edit-cards.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [NavbarComponent, TeaserComponent, EditCardsComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditComponent {

}
