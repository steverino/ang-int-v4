import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../cards.service';
import { CARDS } from '../card-collection'; 

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.css'],
  providers: [CardService]
})
export class ForSaleComponent implements OnInit {

  cards: Card[] = [];
  forSale = '';

  constructor(private cardService: CardService) { }

  getCards(): any {
    let fsCards;
    this.cardService.getCards().subscribe(cards => this.cards = cards);
    
    for(let i=0; i < this.cards.length; i++){
      if(this.cards[i].forSale === true){
        fsCards = this.cards[i];
        console.log(fsCards);  
      }
      
    }
    
  }
  ngOnInit(): void {
    this.getCards();
  }
  
  }

