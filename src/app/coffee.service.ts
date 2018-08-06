import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { COFFEES } from './coffee-list';
import { Coffee } from './coffee';

import { Make } from './make';
import { MAKING } from './making';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor() { }

  getCoffees(): Observable<Coffee[]> {
    return of(COFFEES);
  }

  getCoffee(name: string): Observable<Coffee> {
    return of(COFFEES.find(coffee => coffee.name === name));
  }

  getMaking(): Observable<Make[]> {
    return of(MAKING);
  }

  getMake(name: string): Observable<Make> {
    return of(MAKING.find(make => make.name === name));
  }

}
