import { Offer } from './../data/Offer';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfferFilterService {

  constructor(private http: HttpClient) { }

  fetchItems(id, searchType = 2, pagesNum = 20): Observable<Offer[]> {
    return this.http.get<Offer[]>(`http://localhost:3000/trade?id=${id}&searchType=${searchType}pagesNum=${pagesNum}`);
  }
}
