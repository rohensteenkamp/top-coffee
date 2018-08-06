import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../coffee.service';


import { Location } from '@angular/common';
import { Make } from '../make';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-makers',
  templateUrl: './makers.component.html',
  styleUrls: ['./makers.component.css']
})
export class MakersComponent implements OnInit {

  make: Make;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private coffeeService: CoffeeService ) { }

    ngOnInit(): void {
      this.getMake();
    }

    getMake(): void {
      const name = this.route.snapshot.paramMap.get('name');
      this.coffeeService.getMake(name).subscribe(make => this.make = make);
    }
  
    goBack(): void {
      this.location.back();
    }

}
