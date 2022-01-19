import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CARDS } from '../card-collection';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  cards: Card[] = CARDS;

  constructor() { }

  ngOnInit(): void {
  }

}
