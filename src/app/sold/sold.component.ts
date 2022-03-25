import { Component, OnInit } from '@angular/core';

import { Card } from '../card';
import { CardService } from '../cards.service';


@Component({
  selector: 'app-sold',
  templateUrl: './sold.component.html',
  styleUrls: ['./sold.component.css']
})
export class SoldComponent implements OnInit {

  cards: Card[] = [];
  
  constructor(private cardService: CardService) {}

  getCards(): void {
    this.cardService.getCards().subscribe(cards => this.cards = cards);
  }

  ngOnInit(): void {
    this.getCards();
  }
}
