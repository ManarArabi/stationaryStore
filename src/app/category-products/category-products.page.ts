import { Component, OnInit } from '@angular/core';
import { RequestDataService } from '../services/request-data/request-data.service';
import { CategoryService } from '../services/category/category.service';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.page.html',
  styleUrls: ['./category-products.page.scss'],
})
export class CategoryProductsPage implements OnInit {
  category;
  Products = new Array();
  PageNo = 1;
  PageSize = 6;
  constructor(
    private ps: ProductService,
    private rds: RequestDataService, 
    private cs: CategoryService) {
  }

  ngOnInit() {
    this.getCategory()
    this.getCategoryProduct(this.PageNo, this.PageSize, this.category.id)
  }

  getCategoryProduct(pageNo = 1, pageSize= 6, id){
    this.cs.getCategoryProducts(pageNo, pageSize, id).subscribe((products) => {
      this.Products = this.Products.concat(products)
    });
  }

  getCategory(): void{
    this.category = this.rds.getRequestData()
  }

  getSelectedProduct(product): void{
    this.rds.setRequestData(this.ps.castObjToProductOnly(product));
  }

  loadData(event) {
    setTimeout(() => {
      this.PageNo += 1;
      this.getCategoryProduct(this.PageNo, this.PageSize, this.category.id)
      console.log('Done');
      event.target.complete();
      if (this.Products.length == 200) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
