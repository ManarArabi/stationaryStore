import { Component, OnInit } from '@angular/core';

import { ProductService } from '../services/product/product.service';
import { CategoryService } from '../services/category/category.service';
import { RequestDataService } from '../services/request-data/request-data.service';
import { OffersService } from '../services/offer/offers.service';

import { GradeLevelsComponent } from '../components/grade-levels/grade-levels.component';

import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  BestSeller;
  Categories;
  Offers;
  constructor(
    private ps: ProductService,
    private cs: CategoryService, 
    private rds: RequestDataService, 
    private offersService: OffersService,
    public popoverCtrl: PopoverController
    ) { }

  ngOnInit() {
    this.getBestSeller();
    this.getCategories();
    this.getOffers();
  }

  getBestSeller():void{
    this.ps.getBestSeller().subscribe(Products => this.BestSeller = Products);
  }

  CalculatePriceAfterDiscount(bs):number{
    return bs.price - ((bs.discount/100)*bs.price)
  }

  getCategories():void{
    this.cs.getCategories().subscribe(categories => this.Categories = categories);
  }

  getSelectedProduct(product):void{
    this.rds.setRequestData(product);
  }

  getSelectedCategory(category):void{
    this.rds.setRequestData(category);
  }
  
  async openPopover() {
    const popover = await this.popoverCtrl.create({
      component: GradeLevelsComponent,
      animated: true
    });
    return await popover.present();
  }

  getOffers(){
    this.offersService.getOffers().subscribe((offers) => {
      this.Offers = offers
      console.log(offers);
    });
  }

}
