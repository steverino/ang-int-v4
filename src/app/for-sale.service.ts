import { Injectable } from '@angular/core';

import { Card } from './card'; //This is the interface
import { CARDS } from './card-collection'; // This is the file with the data


@Injectable({
  providedIn: 'root'
})
export class ForSaleService {

  cards: Card[] = [];

  constructor() { }

  fsCards() {
     let fscards = Object.values(CARDS);
     
  }
}
