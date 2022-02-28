import { Component, OnInit } from '@angular/core';

import { CardService } from '../cards.service';
import { Card } from '../card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  
  constructor() { }
  
  ngOnInit(): void {
  
  }

}
