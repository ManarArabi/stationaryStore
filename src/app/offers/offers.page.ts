import { Component, OnInit } from '@angular/core';
import { OffersService } from '../services/offer/offers.service';
import { RequestDataService } from '../services/request-data/request-data.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  Offers;
  constructor(private os:OffersService, private rds: RequestDataService) { }

  ngOnInit() {
    this.getOffers();
  }

  getOffers():void{
    this.os.getOffers().subscribe((Products) => {
      Products.forEach(offer => {
        offer.price = this.calculatePrice(offer);
      });
      this.Offers = Products;
    });
  }

  calculatePrice(o):any{
    let PriceAfterDiscount = o.price - (o.offer.discount/100)*o.price;
    if(PriceAfterDiscount<1){
      return o.price;
    }
    return PriceAfterDiscount.toPrecision(3);
  }
}
