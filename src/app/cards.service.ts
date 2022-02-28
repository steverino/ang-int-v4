import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Card } from './card'; //This is the interface
import { CARDS } from './card-collection'; // This is the file with the data

@Injectable({
  providedIn: 'root',
})
export class CardService {
  cards: Card[] = [];

  constructor() {}

  getCards() {
    let cards = Object.values(CARDS);
    
    return cards;
    
  }
  
  
}
