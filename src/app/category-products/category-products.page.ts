import { Component, OnInit } from '@angular/core';
import { CategoryProductsService } from './../services/category_products/category-products.service';
import { RequestDataService } from '../services/request-data/request-data.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.page.html',
  styleUrls: ['./category-products.page.scss'],
})
export class CategoryProductsPage implements OnInit {
  category;
  Products;
  constructor(private cps: CategoryProductsService, private rds: RequestDataService) {
  }

  ngOnInit() {
    this.getCategory()
    this.getCategoryProduct()
  }

  getCategoryProduct(){
    this.cps.getCategoryProducts(this.category.categoryId).subscribe(products => this.Products = products);
  }

  getCategory(): void{
    this.category = this.rds.getRequestData()
  }

  getSelectedProduct(product): void{
    this.rds.setRequestData(product);
  }
}
