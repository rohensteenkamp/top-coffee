import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';

import { CoffeeService } from '../coffee.service';
import { Location } from '@angular/common';

import { Make } from '../make';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  coffees: Coffee[] = [];
  making: Make [] = [];

  constructor(
    private coffeeService: CoffeeService,
    private location: Location ) { }

  ngOnInit() {
    this.getCoffees();
    this.getMaking();
  }

  getCoffees(): void {
    this.coffeeService.getCoffees().subscribe(coffees => this.coffees = coffees.slice(1-7))
  }

  getMaking(): void {
    this.coffeeService.getMaking().subscribe(making => this.making = making)
  }

  goBack(): void {
    this.location.back();
  }

}
