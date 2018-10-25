import { Offer } from '../data/offer';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfferFilterService {

  constructor(private http: HttpClient) { }

  fetchOffers(id, searchType = 2, pagesNum = 20): Observable<Offer[]> {
    return this.http.get<Offer[]>(`http://localhost:3000/offer?id=${id}&searchType=${searchType}&pagesNum=${pagesNum}`);
  }
}
