import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay, tap } from 'rxjs';
import { Card } from '../../core/interface/card';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  categories: BehaviorSubject<Card[]> = new BehaviorSubject([] as Card[]);
  categories$: Observable<Card[]> = this.categories.asObservable();

  fetchCategories(): Observable<Card[]> {
    return this.http.get<Card[]>('assets/json/sample-categories.json')
      .pipe(
        shareReplay(),
        tap(categories => {
            console.log("categories: " + JSON.stringify(categories));
            this.categories.next(categories);
          })
      );
  }
}
