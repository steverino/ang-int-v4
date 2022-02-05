import { Component, OnInit } from '@angular/core';

import { CardService } from '../cards.service';
import { Card } from '../card';
import { CARDS } from '../card-collection';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  cards: Card[] = [];

  constructor(private cardService: CardService) { }

  getCards(): void {
    this.cardService.getCards().subscribe(cards => this.cards = cards);
  }
  ngOnInit(): void {
    this.getCards();
  }
  
}
