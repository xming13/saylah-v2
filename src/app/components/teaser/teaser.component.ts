import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-teaser',
  standalone: true,
  imports: [],
  templateUrl: './teaser.component.html',
  styleUrl: './teaser.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TeaserComponent {

}
