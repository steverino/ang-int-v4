import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../cards.service';
import { ForSaleService } from '../for-sale.service';
import { CARDS } from '../card-collection';

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.css'],
  
})

export class ForSaleComponent implements OnInit {
  
  cards: Card[] = [];
  
  constructor(private cardService: CardService) {}

  getCards(): void {
    this.cardService.getCards().subscribe(cards => this.cards = cards);
  }

  ngOnInit(): void {
    this.getCards();
  }
}
