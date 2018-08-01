import { AppModule } from './../app.module';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Item } from '../data/item';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemSearchService {

  constructor(private http: HttpClient) { }

  public getItems(name: String): Observable<Item[]> {
    const httpConfig: any = {path: 'http://localhost:3000/item'};
    return this.http.get<Item[]>(`${httpConfig.path}?name=${name}`);
  }
}
