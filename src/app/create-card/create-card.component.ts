import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CardService } from '../cards.service';

import { CARDS } from '../card-collection';
import { Card } from '../card';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css'],
  providers: [CardService]
})
export class CreateCardComponent implements OnInit {

  cards: Card[] = CARDS;
  
  cardUploadForm = new FormGroup({})
  cardName = '';
  cardOwner = '';
  price = '';

  constructor(private cardservice: CardService) { }

  ngOnInit() {
    

    this.cardUploadForm = new FormGroup({
      'cardName': new FormControl(null),
      'cardOwner': new FormControl(null),
      'price': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.cardUploadForm);
  }

}
