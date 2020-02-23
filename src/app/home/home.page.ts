import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { CategoryService } from '../services/category/category.service';
import { RequestDataService } from '../services/request-data/request-data.service';
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
  constructor(
    private ps: ProductService,
    private cs: CategoryService, 
    private rds: RequestDataService, 
    public popoverCtrl: PopoverController
    ) { }

  ngOnInit() {
    this.getBestSeller();
    this.getCategories();
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

  async openPopover() {
    const popover = await this.popoverCtrl.create({
      component: GradeLevelsComponent,
      animated: true
    });
    return await popover.present();
  }
}
