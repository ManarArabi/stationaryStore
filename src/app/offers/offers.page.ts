import { Component, OnInit } from '@angular/core';
import { OffersService } from '../services/offer/offers.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  Offers;
  constructor(private os:OffersService) { }

  ngOnInit() {
    this.getOffers()
  }

  getOffers():void{
    this.os.getOffers().subscribe((Products) => {this.Offers = Products; console.log(Products)});
  }
}
