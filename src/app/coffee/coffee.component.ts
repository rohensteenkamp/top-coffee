import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';

import { CoffeeService } from '../coffee.service';
import { Make } from '../make';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  coffees: Coffee[]; 
  making: Make[];

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit() {
    this.getCoffees();
    this.getMaking();
  }

  getCoffees(): void {
    this.coffeeService.getCoffees().subscribe(coffees => this.coffees = coffees);
  }
  getMaking(): void {
    this.coffeeService.getMaking().subscribe(making => this.making = making);
  }

}
