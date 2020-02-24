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
  Offers;
  constructor(
    private os:OffersService, 
    private rds: RequestDataService,
    private ps: ProductService
    ) { }

  ngOnInit() {
    this.getOffers();
  }

  getOffers():void{
    this.os.getOffers().subscribe((Products) => {
      Products.forEach(offer => {
        offer.price = this.ps.calculatePrice(offer);
      });
      this.Offers = Products;
    });
  }

  getSelectedProduct(obj):void{
    this.rds.setRequestData(this.ps.castOfferToProduct(obj));
  }
}
