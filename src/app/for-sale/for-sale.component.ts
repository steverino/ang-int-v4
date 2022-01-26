import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../cards.service';
//import { CARDS } from '../card-collection'; removed, because services is doing the job now


@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.css']
})
export class ForSaleComponent implements OnInit {


  //cards: Card[] = CARDS; removed, because services is doing the job now
  cards: Card[] = [];

  constructor(public cardService: CardService) { }

  getForSale(): void{
    this.cardService.getForSale(true)
      .subscribe(cards => this.cards = cards);
  }   

  ngOnInit(): void {
    this.getForSale();
      
    }
  
  }
  
 
    

