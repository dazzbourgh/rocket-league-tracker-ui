import { Item } from './../data/item';
import { Component, OnInit } from '@angular/core';
import { ItemSearchService } from './item-search.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css']
})
export class ItemSearchComponent implements OnInit {

  constructor(private itemSearchService: ItemSearchService) { }

  item: Item;

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

  resultFormatter = (item: Item) => item.name;
  inputFormatter = (item: Item) => item.name;
}
