import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { Card } from '../card';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  cardUploadForm = new FormGroup({})
  
  constructor() { }

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
