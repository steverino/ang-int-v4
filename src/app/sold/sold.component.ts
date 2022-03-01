import { Component, OnInit } from '@angular/core';
import { CardService } from '../cards.service';


@Component({
  selector: 'app-sold',
  templateUrl: './sold.component.html',
  styleUrls: ['./sold.component.css']
})
export class SoldComponent implements OnInit {

  cards = this.cardService.getCards();
  
  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cards = this.cardService.getCards();
    
  }
}
