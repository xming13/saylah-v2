import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { CategoriesService } from './categories.service';
import { Observable } from 'rxjs';
import { Card } from '../../core/interface/card';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

  constructor(private service: CategoriesService) {}

  categories$: Observable<Card[]> = this.service.categories$;

  ngOnInit(): void {
    this.service.fetchCategories().subscribe();
  }

}
