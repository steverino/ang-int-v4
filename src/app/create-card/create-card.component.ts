import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


import { Card } from '../card';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  userInput = '';
  cards: Card[] = [];

  @Input() card?: Card;
  @Output() newCardEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}
