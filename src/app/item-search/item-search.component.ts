import { Item } from '../data/item';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemSearchService } from './item-search.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'rl-item-search',
  templateUrl: './item-search.component.html'
})
export class ItemSearchComponent implements OnInit {

  constructor(private itemSearchService: ItemSearchService) {
  }

  item: Item;
  @Output()
  fetched = new EventEmitter<Item>();

  ngOnInit() {
  }

  search = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term => term.length < 2
        ? Promise.resolve([])
        : this.itemSearchService.getItems(term)));
  }

  resultFormatter = (item: Item) => {
    this.fetched.emit(item);
    return item.name;
  }

  inputFormatter = (item: Item) => item.name;
}
