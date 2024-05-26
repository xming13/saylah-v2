import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CategoriesComponent } from '../../modules/categories/categories.component';
import { ActionsComponent } from '../../modules/actions/actions.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoriesComponent, ActionsComponent, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

}
