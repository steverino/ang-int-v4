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
  
  cardUploadForm = new FormGroup({
  cardName: new FormControl(''),
  cardOwner: new FormControl(''),
  price: new FormControl(''),

});

  constructor(private cardservice: CardService) { }

  ngOnInit() {
  
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.cardUploadForm.value);
  }
  // onSubmit() {
  //   console.log(this.cardUploadForm);
  // }

}
