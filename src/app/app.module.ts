import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemSearchComponent } from './item-search/item-search.component';
import { ItemSearchService } from './item-search/item-search.service';
import { OfferFilterComponent } from './offer-filter/offer-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemSearchComponent,
    OfferFilterComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ItemSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
