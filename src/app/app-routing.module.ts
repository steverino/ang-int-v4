import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './cards/cards.component';
import { CreateCardComponent } from './create-card/create-card.component';

const routes: Routes = [
  { path: '', component: CardsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'create-card', component: CreateCardComponent },
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
