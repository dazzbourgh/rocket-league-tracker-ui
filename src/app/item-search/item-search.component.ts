import {Item} from '../data/item';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ItemSearchService} from './item-search.service';
import {Observable, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

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

  search = (text$: Observable<string>) => text$.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(term => term.length < 2
      ? of([])
      : this.itemSearchService.getItems(term)));

  resultFormatter = (item: Item) => {
    this.fetched.emit(item);
    return item.name;
  };

  inputFormatter = (item: Item) => item.name;
}
