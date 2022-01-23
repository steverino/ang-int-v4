import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { CardsComponent } from './cards/cards.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { ForSaleComponent } from './for-sale/for-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    CardDetailsComponent,
    CreateCardComponent,
    ForSaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
