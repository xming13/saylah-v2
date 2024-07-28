import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { Card } from '../../../API';
import { CardApiService } from '../../core/services/card-api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {
  isMenuOpen = false;
  cards: Card[] = [];

  constructor(private cardsService: CardApiService) {}

  ngOnInit(): void {
    this.loadCards();
  }
  
  readText(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }

  async loadCards() {
    try {
      const { username } = await this.cardsService.getCurrentUser();
      const response = await this.cardsService.listCards(username);
      this.cards = response.data.listCards.items;
    } catch (error) {
      console.log('Error fetching cards', error);
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}