import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-detail',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.css'],

})

export class CoffeeDetailComponent implements OnInit {

  coffee: Coffee;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private coffeeService: CoffeeService ) { }

  ngOnInit(): void {
    this.getCoffee();
  }

  getCoffee(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.coffeeService.getCoffee(name).subscribe(coffee => this.coffee = coffee);
  }

  goBack(): void {
    this.location.back();
  }

}
