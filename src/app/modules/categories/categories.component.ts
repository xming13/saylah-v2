import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { CategoriesService } from './categories.service';
import { Observable, Subscription } from 'rxjs';
import { Card } from '../../core/interface/card';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SpeechSynthesisService } from '../../core/services/speech-synthesis.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CardComponent, CommonModule, RouterModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit, OnDestroy {

  constructor(private service: CategoriesService, private route: ActivatedRoute,
    private speechService: SpeechSynthesisService) {}

  category$: Observable<Card> = this.service.category$;

  subscription!: Subscription;
  
  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      // const categoryCode = params.get('code');
      const currentUrl = segments.map(segment => { 
        return segment.path}).join('/');
      if (currentUrl) {
        this.subscription = this.service.fetchCategoryByCode(currentUrl.split('/')[segments.length-1]).subscribe();
      } else {
        this.subscription = this.service.fetchCategoryByCode('categories').subscribe();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  say(card: Card) {
    this.speechService.play(card.name);
  }

}
