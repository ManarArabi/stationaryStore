import { Component, OnInit } from '@angular/core';
import { OffersService } from '../services/offer/offers.service';
import { RequestDataService } from '../services/request-data/request-data.service';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  Offers = new Array();
  PageNo = 1;
  PageSize = 6;
  constructor(
    private os:OffersService, 
    private rds: RequestDataService,
    private ps: ProductService
    ) { }

  ngOnInit() {
    this.getOffers(this.PageNo, this.PageSize);
  }

  getOffers(pageNo = 1, pageSize = 6):void{
    this.os.getOffers(pageNo, pageSize).subscribe((Products) => {
      Products.forEach(offer => {
        offer.price = this.ps.calculatePrice(offer);
      });
      this.Offers = this.Offers.concat(Products);
    });
  }

  getSelectedProduct(obj):void{
    this.rds.setRequestData(this.ps.castOfferToProduct(obj));
  }

  loadData(event) {
    setTimeout(() => {
      this.PageNo += 1;
      this.getOffers(this.PageNo, this.PageSize)
      console.log('Done');
      event.target.complete();
      if (this.Offers.length == 200) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
