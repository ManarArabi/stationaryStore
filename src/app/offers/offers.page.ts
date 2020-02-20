import { Component, OnInit } from '@angular/core';
import { ProductService } from './../services/product/product.service'; 
@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  Offers;
  constructor(private ps: ProductService) { }

  ngOnInit() {
    this.getOffers()
  }

  getOffers():void{
    this.ps.getBestSeller().subscribe(Products => this.Offers = Products);  }
}
