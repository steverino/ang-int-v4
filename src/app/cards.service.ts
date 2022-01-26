import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Card } from './card'; //This is the interface
import { CARDS } from './card-collection'; // This is the file with the data

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCards(): Observable<Card[]> {
    const cards = of(CARDS);
    return cards;
  
  }

  getForSale(forSale: boolean): Observable<Card[]> {
    const cards = of(CARDS);
    return cards;
  }
  
  
}