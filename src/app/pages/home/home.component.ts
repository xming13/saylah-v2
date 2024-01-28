import { Component } from '@angular/core';
import { CategoriesComponent } from '../../modules/categories/categories.component';
import { ActionsComponent } from '../../modules/actions/actions.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoriesComponent, ActionsComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
