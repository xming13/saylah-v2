import { CUSTOM_ELEMENTS_SCHEMA, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import * as mutations from '../../../graphql/mutations';
import * as queries from "../../../graphql/queries";
import * as subscriptions from "../../../graphql/subscriptions";
import { generateClient, type Client } from 'aws-amplify/api';
import { Card, ListCardsQuery } from '../../../API';
import { CommonModule } from '@angular/common';
import { CreateCardPopupComponent } from './create-card-popup/create-card-popup.component';
import { DeleteCardPopupComponent } from './delete-card-popup/delete-card-popup.component';
import { UpdateCardPopupComponent } from './update-card-popup/update-card-popup.component';
import { RouterModule } from '@angular/router';
import { SpeechSynthesisService } from '../../core/services/speech-synthesis.service';
import { getCurrentUser } from 'aws-amplify/auth';

@Component({
  selector: 'app-edit-cards',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,
    CreateCardPopupComponent,
    DeleteCardPopupComponent,
    UpdateCardPopupComponent,
    RouterModule
  ],
  templateUrl: './edit-cards.component.html',
  styleUrl: './edit-cards.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditCardsComponent implements OnInit, OnDestroy {
  public cards: ListCardsQuery['listCards'];
  public filteredCards: any[] | null | undefined = [];

  public createForm!: FormGroup;
  public client!: Client;

  private createSubscription: any = null;
  private deleteSubscription: any = null;
  private updateSubscription: any = null;

  showUpdateModal = false;
  showCreateModal = false;
  showDeleteModal = false;
  selectedCard: Card | null = null;
  selectedTab = 'all';
  constructor(private fb: FormBuilder,
    private speechService: SpeechSynthesisService) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      type: ['', Validators.required],
      image: ['', Validators.required],
      sound: ['', Validators.required],
    });

    this.client = generateClient();
  }

  async ngOnInit() {
    try {
      const { username, userId, signInDetails } = await getCurrentUser();
      const response = await this.client.graphql({
        query: queries.listCards,
        authMode: 'userPool',
        variables: {
          filter: {
            owner: {
              eq: username
            }
          }
        }
      });
      console.log("username - 2: " + username);
      this.cards = response.data.listCards;
      this.filteredCards = this.cards.items;
    } catch (e) {
      console.log('error fetching cards', e);
    }

    this.createSubscription = this.client
      .graphql({
        query: subscriptions.onCreateCard
      })
      .subscribe({
        next: (event: any) => {
          console.log("create event.data: " + JSON.stringify(event.data));
          const newCard: Card = event.data.onCreateCard;
          if (this.cards) {
            this.cards.items = [newCard, ...this.cards.items];
            this.filter();
          }
        }
      });

      this.deleteSubscription = this.client
      .graphql({
        query: subscriptions.onDeleteCard
      })
      .subscribe({
        next: (event: any) => {
          console.log("delete event.data: " + JSON.stringify(event.data));
          const deletedCardId: string = event.data.onDeleteCard.id;
          if (this.cards) {
            this.cards.items = this.cards.items.filter(card => card?.id !== deletedCardId);
            this.filter();
          }
        },
        error: (error) => {
          console.log('Error deleting card:', error);
        }
      });

      this.updateSubscription = this.client
      .graphql({
        query: subscriptions.onUpdateCard
      })
      .subscribe({
        next: (event: any) => {
          console.log("update event.data: " + JSON.stringify(event.data));
          if (this.cards) {
            const updateCardId: string = event.data.onUpdateCard.id;
            const index = this.cards.items.findIndex(item => item?.id === updateCardId);
            if (index !== -1) {
              this.cards.items[index] = event.data.onUpdateCard;
              this.filter();
            }
          }
        },
        error: (error) => {
          console.log('Error updating card:', error);
        }
      });
  }


  ngOnDestroy(): void {
    if (this.createSubscription) {
      this.createSubscription.unsubscribe();
    }
    if (this.deleteSubscription) {
      this.deleteSubscription.unsubscribe();
    }
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
    this.createSubscription = null;
    this.deleteSubscription = null;
    this.updateSubscription = null;
  }

  public async onCreate(card: Card) {
    try {
      const { username, userId, signInDetails } = await getCurrentUser();
      card.owner = username;
      const response = await this.client.graphql({
        query: mutations.createCard,
        variables: {
          input: card
        },
        authMode: 'userPool'
      });
      console.log('card created!', response);
      this.createForm.reset();
    } catch (e) {
      console.log('error creating card...', e);
    }
  }
  public async onDelete(cardId: string | undefined) {
    if (cardId) {
      try {
        const response = await this.client.graphql({
            query: mutations.deleteCard,
            variables: {
                input: { id: cardId }
            },
            authMode: 'userPool'
        });
        console.log('card deleted!', response);
      } catch (e) {
          console.log('error deleting card...', e);
      }
    }
  }
  public async onUpdate(card: Card | null) {
    if (card !== null) {
      try {
          const response = await this.client.graphql({
              query: mutations.updateCard,
              variables: {
                  input: card
              },
              authMode: 'userPool'
          });
          console.log('card updated!', response);
      } catch (e) {
          console.log('error updating card...', e);
      }
    }
  }

  async onCreateCard(card: Card | null) {
    console.log("onCreateCard: " + card);
    this.showCreateModal = !this.showCreateModal;
    if(card) {
      await this.onCreate(card);
    }
  }

  toggleCreatePopup() {
    this.showCreateModal = !this.showCreateModal;
  }

  async onUpdateCard(card: Card | null) {
    this.showUpdateModal = !this.showUpdateModal;
    await this.onUpdate(card);
  }

  toggleUpdatePopup(card: Card | null) {
    this.selectedCard = card;
    this.showUpdateModal = !this.showUpdateModal;
  }

  async onDeleteCard(canDelete: boolean) {
    this.showDeleteModal = !this.showDeleteModal;
    if(canDelete) {
      await this.onDelete(this.selectedCard?.id);
    }
  }

  toggleDeletePopup(card: Card | null) {
    this.selectedCard = card;
    this.showDeleteModal = !this.showDeleteModal;
  }

  say(card: Card | null) {
    if (card) {
      this.speechService.play(card.name);
    }
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.filterByType(tab);
  }

  filterByType(type: string) {
    this.selectedTab = type;
    this.filter();
  }

  filter() {
    if (this.selectedTab === 'all') {
      // If 'All' is selected, show all cards
      this.filteredCards = this.cards?.items;
    } else {
      // Filter cards by type
      this.filteredCards = this.cards?.items.filter(card => card?.type === this.selectedTab);
    }
  }
}
