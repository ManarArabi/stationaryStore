import { Component, OnInit } from '@angular/core';

import { ProductService } from '../services/product/product.service';
import { CategoryService } from '../services/category/category.service';
import { RequestDataService } from '../services/request-data/request-data.service';
import { OffersService } from '../services/offer/offers.service';
import { Product } from './../types/Product';

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
  SelectedProduct: Product = {
    id: 0,
    name: "",
    description: "",
    imageUrl: [
      {
        imageUrl: ""
      }
    ],
    discount: 0,
    price: 0
  };
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
    this.ps.getBestSeller().subscribe((Products) => {this.BestSeller = Products; console.log(Products)});
  }

  CalculatePriceAfterDiscount(bs):number{
    return bs.price - ((bs.discount/100)*bs.price)
  }

  getCategories():void{
    this.cs.getCategories().subscribe(categories => this.Categories = categories);
  }

  getSelectedProduct(obj):void{
    this.castObjToProductOnly(obj)
    console.log(this.SelectedProduct)
    this.rds.setRequestData(this.SelectedProduct);
  }

  getSelectedProductFromOffer(offer){
    this.castOfferToProduct(offer)
    console.log(this.SelectedProduct)
    this.rds.setRequestData(this.SelectedProduct);
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

  castOfferToProduct(obj){
    this.SelectedProduct.id = obj.offer.product.productId;
    this.SelectedProduct.name = obj.offer.product.productName;
    this.SelectedProduct.description = obj.offer.product.description;
    this.SelectedProduct.imageUrl = obj.offer.product.imageUrl;
    this.SelectedProduct.discount = obj.offer.discount;
    this.SelectedProduct.price = obj.price;
  }

  castObjToProductOnly(obj){
    this.SelectedProduct.id = obj.product.productId;
    this.SelectedProduct.name = obj.product.productName;
    this.SelectedProduct.description = obj.product.description;
    this.SelectedProduct.imageUrl = obj.product.imageUrl;
    this.SelectedProduct.discount = obj.discount;
    this.SelectedProduct.price = obj.price;
  }

}
