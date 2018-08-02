import { OfferItem } from '../data/offer-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rl-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.css']
})
export class OfferItemComponent implements OnInit {

  constructor() { }

  @Input()
  has: OfferItem;
  @Input()
  wants: OfferItem;
  @Input()
  link: string;

  ngOnInit() {
  }

}
