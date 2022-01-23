import { Component } from '@angular/core';
import { Card } from './card';
import { CARDS } from './card-collection';
import { CardService } from './cards.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cards: Card[] = CARDS;

  title = 'ang-int-v4';
}
