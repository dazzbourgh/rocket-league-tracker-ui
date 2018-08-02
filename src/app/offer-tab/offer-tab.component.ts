import { Component, OnInit } from '@angular/core';
import { Offer } from '../data/offer';

@Component({
  selector: 'rl-offer-tab',
  templateUrl: './offer-tab.component.html',
  styleUrls: ['./offer-tab.component.css']
})
export class OfferTabComponent implements OnInit {

  constructor() { }

  offers: Offer[];

  ngOnInit() {
  }

  displayOffers(offers: Offer[]) {
    this.offers = offers;
  }
}
