import { Component, OnInit } from '@angular/core';
import { RequestDataService } from '../services/request-data/request-data.service';
import { ProductService } from './../services/product/product.service';

@Component({
  selector: 'app-search-res',
  templateUrl: './search-res.page.html',
  styleUrls: ['./search-res.page.scss'],
})
export class SearchResPage implements OnInit {
  SearchRes;
  Products;
  Categories;
  constructor(
    private rds: RequestDataService,
    private ps: ProductService
    ) { }

  ngOnInit() {
    this.getSearchResults()
    console.log(this.SearchRes)
    this.Products = this.SearchRes.products
    this.Categories = this.SearchRes.categories
    this.Products.forEach(p => {
      p.price = this.ps.calculatePrice(p);
    });
    
  }

  getSearchResults(){
    this.SearchRes = this.rds.getRequestData()
  }

  hasProducts(): any{
    if(this.Products.length) return true;
    return false;
  }

  hasCategories(): any{
    if(this.Categories.length) return true;
    return false;
  }

  getSelectedCategory(category){
    this.rds.setRequestData(category);
  }

  getSelectedProduct(Product){
    this.rds.setRequestData(this.ps.castObjToProductOnly(Product));
  }
}
