import { Offer } from '../data/offer';
import { OfferFilterService } from './offer-filter.service';
import { Item } from '../data/item';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'rl-offer-filter',
  templateUrl: './offer-filter.component.html'
})
export class OfferFilterComponent implements OnInit {

  constructor(private offerFilterService: OfferFilterService) { }

  item: Item;
  searchType: number;
  pagesNum: number;
  @Output()
  fetched: EventEmitter<Offer[]> = new EventEmitter<Offer[]>();

  _searchCaption: string;

  get searchCaption() {
    if (this.searchType) {
      return (this.searchType === 1) ? 'WANT' : 'HAVE';
    } else {
      return '';
    }
  }

  ngOnInit() {
  }

  setItem(item) {
    this.item = item;
  }

  submit() {
    this.offerFilterService.fetchItems(this.item.id, this.searchType, this.pagesNum)
      .subscribe((offers: Offer[]) => {
        this.fetched.emit(offers);
      });
  }
}
