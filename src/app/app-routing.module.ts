import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './cards/cards.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { SoldComponent } from './sold/sold.component';

const routes: Routes = [
  { path: '', component: CardsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'create-card', component: CreateCardComponent },
  { path: 'for-sale', component: ForSaleComponent },
  { path: 'sold', component: SoldComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
