import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CARDS } from '../card-collection';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: Card[] = CARDS;


  constructor() { }

  ngOnInit(): void {
  }

}
