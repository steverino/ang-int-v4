import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../cards.service';
import { CARDS } from '../card-collection';


@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.css']
})
export class ForSaleComponent implements OnInit {


  cards: Card[] = CARDS;

  constructor() { }

  ngOnInit(): void {
    for(let card of this.cards){
      if(card.forSale == true){
        //SHOW THE CARDS FOR SALE IN HTML {{ THESE cards ARE FOR SALE }}
      }
      
    }
  }
  
 
    
}
